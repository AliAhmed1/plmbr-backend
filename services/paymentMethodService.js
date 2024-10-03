"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const validationUtil_1 = require("../utils/validationUtil");
const userService_1 = require("./userService");
const Stripe = require('stripe');
const dynamoDB = require('../config/dbConfig');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const TABLE_NAME = process.env.TABLE_PAYMENT_METHOD;
const findStripeCustomerByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield stripe.customers.list({
            email: email,
            limit: 1, // We only need to check the first result
        });
        return customers.data.length > 0 ? customers.data[0] : null;
    }
    catch (error) {
        throw new Error(`Error retrieving customers from Stripe: ${error.message}`);
    }
});
const PaymentMethodService = {
    createPaymentCard: (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
        // Step 1: Validate Payment Data
        const { stripeToken, cvc } = paymentData, restPaymentData = __rest(paymentData, ["stripeToken", "cvc"]);
        const extendedPaymentData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.paymentMethodSchema, restPaymentData, "PaymentMethod");
        const validationResult = generatedZodSchema_1.paymentMethodSchema.safeParse(extendedPaymentData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Payment data is invalid: ${errors}`);
        }
        const paymentMethod = Object.assign({}, validationResult.data);
        // Step 2: Validate card details (except for Stripe-specific fields)
        if (paymentMethod.expiryDate) {
            (0, validationUtil_1.validateDate)(paymentMethod.expiryDate);
        }
        if (paymentMethod.cardType && paymentMethod.cardNumber) {
            if (!(0, validationUtil_1.validateCardNumber)(paymentMethod.cardType, paymentMethod.cardNumber)) {
                throw new Error('Invalid card number for the given card type');
            }
        }
        let checkUser;
        if (paymentMethod.userPaymentMethodsId) {
            checkUser = yield (0, userService_1.getUserById)(paymentMethod.userPaymentMethodsId);
            if (!checkUser) {
                throw new Error('User not found');
            }
        }
        else {
            throw new Error('User ID is required');
        }
        let stripeCustomer;
        let stripeCustomerId;
        if (checkUser.email) {
            stripeCustomer = yield findStripeCustomerByEmail(checkUser.email);
            if (stripeCustomer) {
                stripeCustomerId = stripeCustomer.id;
            }
        }
        if (!stripeCustomerId) {
            try {
                stripeCustomer = yield stripe.customers.create({
                    name: `${checkUser.firstName} ${checkUser.lastName}`,
                    email: checkUser.email, // Use user email for creating customer
                });
                stripeCustomerId = stripeCustomer.id;
            }
            catch (error) {
                throw new Error(`Error creating Stripe customer: ${error.message}`);
            }
        }
        // Step 3: Create Card on Stripe and Attach to Customer
        const [year, month] = paymentMethod.expiryDate.split('-').map(Number);
        if (isNaN(month) || isNaN(year)) {
            throw new Error('Invalid expiry date format');
        }
        try {
            const stripePaymentMethod = yield stripe.paymentMethods.create({
                type: 'card',
                card: {
                    token: stripeToken, // Your Stripe token
                },
            });
            yield stripe.paymentMethods.attach(stripePaymentMethod.id, {
                customer: stripeCustomer.id,
            });
            paymentMethod.stripeCardId = stripePaymentMethod.id; // Add Stripe card ID
            paymentMethod.stripeCustomerId = stripeCustomerId; // Add Stripe customer ID
            // Save card info in DynamoDB
            const params = {
                TableName: TABLE_NAME,
                Item: paymentMethod,
            };
            yield dynamoDB.send(new lib_dynamodb_1.PutCommand(params));
            return paymentMethod;
        }
        catch (error) {
            throw new Error(`Error creating payment card on Stripe: ${error.message}`);
        }
    }),
    getPaymentCardById: (cardId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: { id: cardId },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(params));
        if (!result.Item) {
            throw new Error('Payment card not found');
        }
        return result.Item;
    }),
    deletePaymentCard: (cardId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Retrieve the payment method from DynamoDB to get the Stripe card ID
            const paymentMethod = yield PaymentMethodService.getPaymentCardById(cardId);
            if (paymentMethod && paymentMethod.stripeCardId) {
                yield stripe.paymentMethods.detach(paymentMethod.stripeCardId);
            }
            // Delete card on Stripe
            // Delete card from DynamoDB
            const params = {
                TableName: TABLE_NAME,
                Key: { id: cardId },
            };
            yield dynamoDB.send(new lib_dynamodb_1.DeleteCommand(params));
        }
        catch (error) {
            throw new Error(`Error deleting payment card on Stripe: ${error.message}`);
        }
    }),
    getAllPaymentCardsByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-User.paymentMethods',
            KeyConditionExpression: 'userPaymentMethodsId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        return result.Items;
    }),
};
module.exports = PaymentMethodService;
