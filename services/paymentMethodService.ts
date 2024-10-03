import { PutCommand, GetCommand, QueryCommand, DeleteCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { PaymentMethod, CardType, User } from '../src/API';
import { paymentMethodSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import { validateDate, validateCardNumber } from '../utils/validationUtil';
import { getUserById } from './userService';
const Stripe = require('stripe');
const dynamoDB = require('../config/dbConfig');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const TABLE_NAME = process.env.TABLE_PAYMENT_METHOD;

interface ExtendedPaymentMethod extends PaymentMethod {
  cvc : number;
  stripeToken: string;
}

const findStripeCustomerByEmail = async (email: string): Promise<any | null> => {
  try {
    const customers = await stripe.customers.list({
      email: email,
      limit: 1, // We only need to check the first result
    });
    return customers.data.length > 0 ? customers.data[0] : null;
  } catch (error: any) {
    throw new Error(`Error retrieving customers from Stripe: ${error.message}`);
  }
};
const PaymentMethodService = {
  createPaymentCard: async (paymentData: Partial<ExtendedPaymentMethod>): Promise<PaymentMethod> => {
    // Step 1: Validate Payment Data

    const {stripeToken, cvc, ...restPaymentData} = paymentData;

    const extendedPaymentData = processSchemaAndData(paymentMethodSchema, restPaymentData, "PaymentMethod");
    const validationResult = paymentMethodSchema.safeParse(extendedPaymentData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Payment data is invalid: ${errors}`);
    }

    const paymentMethod: PaymentMethod = { ...validationResult.data };

    // Step 2: Validate card details (except for Stripe-specific fields)
    if (paymentMethod.expiryDate) {
      validateDate(paymentMethod.expiryDate);
    }

    if (paymentMethod.cardType && paymentMethod.cardNumber) {
      if (!validateCardNumber(paymentMethod.cardType, paymentMethod.cardNumber)) {
        throw new Error('Invalid card number for the given card type');
      }
    }

    let checkUser: User ;
    if (paymentMethod.userPaymentMethodsId) {
      checkUser = await getUserById(paymentMethod.userPaymentMethodsId);
      if (!checkUser) {
        throw new Error('User not found');
      }
    } else {
      throw new Error('User ID is required');
    }

    let stripeCustomer;
    let stripeCustomerId;
    if (checkUser.email) {
      stripeCustomer = await findStripeCustomerByEmail(checkUser.email);
      if (stripeCustomer) {
        stripeCustomerId = stripeCustomer.id;
      }
    }
    if (!stripeCustomerId) {
      try {
        stripeCustomer = await stripe.customers.create({
          name: `${checkUser.firstName} ${checkUser.lastName}`,
          email: checkUser.email, // Use user email for creating customer
        });
        stripeCustomerId = stripeCustomer.id;
      } catch (error: any) {
        throw new Error(`Error creating Stripe customer: ${error.message}`);
      }
    }

    // Step 3: Create Card on Stripe and Attach to Customer
    const [year, month] = paymentMethod.expiryDate.split('-').map(Number);

    if (isNaN(month) || isNaN(year)) {
      throw new Error('Invalid expiry date format');
    }
    try {

      const stripePaymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          token: stripeToken, // Your Stripe token
        },
      });

      await stripe.paymentMethods.attach(stripePaymentMethod.id, {
        customer: stripeCustomer.id,
      });


        paymentMethod.stripeCardId = stripePaymentMethod.id; // Add Stripe card ID
        paymentMethod.stripeCustomerId = stripeCustomerId; // Add Stripe customer ID

      // Save card info in DynamoDB
      const params = {
        TableName: TABLE_NAME,
        Item: paymentMethod,
      };

      await dynamoDB.send(new PutCommand(params));
      return paymentMethod;
    } catch (error: any) {
      throw new Error(`Error creating payment card on Stripe: ${error.message}`);
    }
  },

  getPaymentCardById: async (cardId: string): Promise<PaymentMethod> => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id: cardId },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('Payment card not found');
    }
    return result.Item as PaymentMethod;
  },

  deletePaymentCard: async (cardId: string): Promise<void> => {
    try {
      // Retrieve the payment method from DynamoDB to get the Stripe card ID
      
      const paymentMethod = await PaymentMethodService.getPaymentCardById(cardId);
      if (paymentMethod  && paymentMethod.stripeCardId) {
        await stripe.paymentMethods.detach(paymentMethod.stripeCardId);
      }

      // Delete card on Stripe

      // Delete card from DynamoDB
      const params = {
        TableName: TABLE_NAME,
        Key: { id: cardId },
      };

      await dynamoDB.send(new DeleteCommand(params));
    } catch (error: any) {
      throw new Error(`Error deleting payment card on Stripe: ${error.message}`);
    }
  },
  getAllPaymentCardsByUserId: async (userId: string): Promise<PaymentMethod[]> => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: 'gsi-User.paymentMethods',
      KeyConditionExpression: 'userPaymentMethodsId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    };

    const result = await dynamoDB.send(new QueryCommand(params));
    return result.Items as PaymentMethod[];
  },
};

export = PaymentMethodService;
