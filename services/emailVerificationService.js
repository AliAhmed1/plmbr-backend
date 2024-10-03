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
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { UpdateCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const TABLE_NAME_PROVIDERS = process.env.TABLE_PROVIDER;
const EmailVerificationService = {
    sendVerificationEmail: (email, isProvider) => __awaiter(void 0, void 0, void 0, function* () {
        // Generate a verification token
        const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
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
            from: '"Your App Team" <info@yourapp.com>',
            to: email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking the following link: ${verificationLink}`,
        };
        try {
            yield transporter.sendMail(mailOptions);
            console.log(`Verification email sent to ${email}`);
        }
        catch (error) {
            console.error(`Failed to send verification email: ${error}`);
            throw new Error('Failed to send verification email');
        }
    }),
    verifyEmail: (token, isProvider) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Decode the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const email = decoded.email;
            // Get the provider or user by email
            const params = {
                TableName: TABLE_NAME_PROVIDERS,
                IndexName: 'gsi-Email.providers',
                KeyConditionExpression: 'email = :email',
                ExpressionAttributeValues: { ':email': email },
            };
            const result = yield dynamoDB.send(new QueryCommand(params));
            if (!result.Items || result.Items.length === 0) {
                throw new Error('Email not found');
            }
            const provider = result.Items[0];
            // Update the isEmailVerified field
            const updateParams = {
                TableName: TABLE_NAME_PROVIDERS,
                Key: { id: provider.id },
                UpdateExpression: 'SET isEmailVerified = :isEmailVerified',
                ExpressionAttributeValues: {
                    ':isEmailVerified': true,
                },
            };
            yield dynamoDB.send(new UpdateCommand(updateParams));
            return { message: 'Email verified successfully' };
        }
        catch (error) {
            console.error(`Failed to verify email: ${error}`);
            throw new Error('Invalid or expired token');
        }
    }),
};
module.exports = EmailVerificationService;
