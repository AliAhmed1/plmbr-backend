const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { UpdateCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Provider } from '../src/API';
import { providerSchema } from '../schema/generatedZodSchema';
import ProviderService from './providerService';
import UserService from './userService';

const TABLE_NAME_PROVIDERS = process.env.TABLE_PROVIDER;
const TABLE_NAME_USER = process.env.TABLE_USER;

const EmailVerificationService = {
  sendVerificationEmail: async (email: string) => {
    // Generate a verification token
    const verificationToken = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const verificationLink = `${process.env.APP_URL}/verify-email?token=${verificationToken}`;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: '"PLMBR Team" <info@plmbr.app>',
      to: email,
      subject: 'Email Verification',
      text: `Please verify your email by clicking the following link: ${verificationLink}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Verification email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send verification email: ${error}`);
      throw new Error('Failed to send verification email');
    }
  },

  verifyEmail: async (token: string, authToken: string) => {
    try {
      // Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const email = decoded.email;

      const authDecoded = jwt.verify(authToken, process.env.JWT_SECRET);

      const userOrProvider = authDecoded.userType === 'Provider'
        ? await ProviderService.getProviderByEmail(email)
        : await UserService.getUserByEmail(email);

      if (!userOrProvider) {
        throw new Error('Email not found');
      }
     
      // Update the isEmailVerified field
      const updateParams = {
        TableName: authDecoded.userType === 'Provider' ? TABLE_NAME_PROVIDERS : TABLE_NAME_USER,
        Key: { id: userOrProvider.id },
        UpdateExpression: 'SET isEmailVerified = :isEmailVerified',
        ExpressionAttributeValues: {
          ':isEmailVerified': true,
        },
      };

      await dynamoDB.send(new UpdateCommand(updateParams));
      return { message: 'Email verified successfully' };
    } catch (error) {
      console.error(`Failed to verify email: ${error}`);
      throw new Error('Invalid or expired token');
    }
  },
};

export = EmailVerificationService;
