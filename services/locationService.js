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
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const addCommonFields_1 = require("../utils/addCommonFields");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const uuid_1 = require("uuid");
const dynamoDB = require('../config/dbConfig');
const LOCATION_TABLE_NAME = 'Locations';
const PROVIDER_TABLE_NAME = 'Providers';
const USER_TABLE_NAME = 'Users';
const LocationService = {
    setLocation: (userId, providerId, locationData) => __awaiter(void 0, void 0, void 0, function* () {
        // Validate location data
        const extendedLocationData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.locationSchema, Object.assign(Object.assign({}, locationData), { timestamp: Date.now().toString() }), "Location");
        console.log('Extended Location Data:', extendedLocationData); // Log for debugging
        const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(Object.assign({}, extendedLocationData));
        if (!locationValidationResult.success) {
            console.error(locationValidationResult.error); // Log validation errors
            throw new Error('Invalid location data');
        }
        // Insert or update the location in the Location table
        const locationId = (extendedLocationData === null || extendedLocationData === void 0 ? void 0 : extendedLocationData.id) || (0, uuid_1.v4)();
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
        return locationParams.Item;
    })
};
module.exports = LocationService;
