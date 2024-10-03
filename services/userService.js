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
const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const TABLE_NAME = process.env.TABLE_USER;
const UserService = {
    createUser: (userData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedUserData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.userSchema, userData, "User");
        const validationResult = generatedZodSchema_1.userSchema.safeParse(extendedUserData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`User data is invalid: ${errors}`);
        }
        const user = validationResult.data;
        const params = {
            TableName: TABLE_NAME,
            Item: user,
        };
        yield dynamoDB.send(new PutCommand(params));
        return user;
    }),
    getUserById: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: userId,
            },
        };
        const result = yield dynamoDB.send(new GetCommand(params));
        if (!result.Item) {
            throw new Error('User not found');
        }
        return result.Item;
    }),
    getUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-Email.users',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: { ':email': email },
        };
        const result = yield dynamoDB.send(new QueryCommand(params));
        return result.Items && result.Items.length > 0 ? result.Items[0] : null;
    }),
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
        };
        const result = yield dynamoDB.send(new ScanCommand(params));
        return result.Items;
    }),
    updateUser: (userId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedUpdateData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.userSchema, updateData, "User");
        const validationResult = generatedZodSchema_1.userSchema.safeParse(extendedUpdateData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`User update data is invalid: ${errors}`);
        }
        const filteredUpdateData = Object.entries(validationResult.data)
            .filter(([key]) => !['id', 'createdAt', 'updatedAt', 'lastLogin'].includes(key))
            .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
        const updateExpression = [];
        const expressionAttributeNames = {};
        const expressionAttributeValues = {};
        for (const [key, value] of Object.entries(filteredUpdateData)) {
            updateExpression.push(`#${key} = :${key}`);
            expressionAttributeNames[`#${key}`] = key;
            expressionAttributeValues[`:${key}`] = value;
        }
        const params = {
            TableName: TABLE_NAME,
            Key: { id: userId },
            UpdateExpression: `SET ${updateExpression.join(', ')}`,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
    deleteUser: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: userId,
            },
        };
        const result = yield dynamoDB.send(new DeleteCommand(params));
        return result.Attributes;
    }),
    updateUserLocation: (userId, locationData) => __awaiter(void 0, void 0, void 0, function* () {
        const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(locationData);
        if (!locationValidationResult.success) {
            const errors = locationValidationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Location data is invalid: ${errors}`);
        }
        const existingUser = yield UserService.getUserById(userId);
        const updatedUserData = Object.assign(Object.assign({}, existingUser), { currentLocation: locationValidationResult.data, updatedAt: new Date().toISOString() });
        const userValidationResult = generatedZodSchema_1.userSchema.safeParse(updatedUserData);
        if (!userValidationResult.success) {
            const errors = userValidationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Updated user data is invalid: ${errors}`);
        }
        const params = {
            TableName: TABLE_NAME,
            Key: { id: userId },
            UpdateExpression: 'SET currentLocation = :currentLocation, updatedAt = :updatedAt',
            ExpressionAttributeValues: {
                ':currentLocation': locationValidationResult.data,
                ':updatedAt': updatedUserData.updatedAt,
            },
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
};
module.exports = UserService;
