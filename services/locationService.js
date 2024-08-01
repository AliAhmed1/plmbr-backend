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
Object.defineProperty(exports, "__esModule", { value: true });
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const addCommonFields_1 = require("../utils/addCommonFields");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const { uuidv4 } = require('uuid');
const dynamoDB = lib_dynamodb_1.DynamoDBDocumentClient.from(new client_dynamodb_1.DynamoDBClient({ region: 'your-region' }));
const LOCATION_TABLE_NAME = 'Locations';
const PROVIDER_TABLE_NAME = 'Providers';
const USER_TABLE_NAME = 'Users';
const setLocation = (userId, providerId, locationData) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate location data
    const extendedLocationData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.locationSchema, locationData, "Location");
    const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(extendedLocationData);
    if (!locationValidationResult.success) {
        throw new Error('Invalid location data');
    }
    // Insert or update the location in the Location table
    const locationId = extendedLocationData.id || uuidv4();
    const locationParams = {
        TableName: LOCATION_TABLE_NAME,
        Item: Object.assign(Object.assign({}, extendedLocationData), { id: locationId }),
    };
    yield dynamoDB.send(new lib_dynamodb_1.PutCommand(locationParams));
    // Update the provider or user with the locationId
    if (userId) {
        const userParams = {
            TableName: USER_TABLE_NAME,
            Key: { id: userId },
            UpdateExpression: 'set locationId = :locationId',
            ExpressionAttributeValues: {
                ':locationId': locationId,
            },
        };
        yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(userParams));
    }
    if (providerId) {
        const extendedProviderData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.providerSchema, { id: providerId }, "Provider");
        const providerValidationResult = generatedZodSchema_1.providerSchema.safeParse(extendedProviderData);
        if (!providerValidationResult.success) {
            throw new Error('Invalid provider data');
        }
        const providerParams = {
            TableName: PROVIDER_TABLE_NAME,
            Key: { id: providerId },
            UpdateExpression: 'set locationId = :locationId',
            ExpressionAttributeValues: {
                ':locationId': locationId,
            },
        };
        yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(providerParams));
    }
    return { locationId };
});
exports.default = setLocation;
