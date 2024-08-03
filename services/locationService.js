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
        var _a, _b;
        // Validate location data
        const extendedLocationData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.locationSchema, Object.assign(Object.assign({}, locationData), { timestamp: Date.now().toString() }), "Location");
        const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(Object.assign({}, extendedLocationData));
        if (!locationValidationResult.success) {
            console.error(locationValidationResult.error); // Log validation errors
            throw new Error('Invalid location data');
        }
        let locationId = null;
        // Fetch existing locationId from user or provider
        if (userId) {
            const userParams = {
                TableName: USER_TABLE_NAME,
                Key: { id: userId },
            };
            const userResult = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(userParams));
            locationId = ((_a = userResult.Item) === null || _a === void 0 ? void 0 : _a.userCurentLocationId) || null;
        }
        if (providerId) {
            const providerParams = {
                TableName: PROVIDER_TABLE_NAME,
                Key: { id: providerId },
            };
            const providerResult = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(providerParams));
            locationId = ((_b = providerResult.Item) === null || _b === void 0 ? void 0 : _b.providerCurrentLocationId) || null;
        }
        // Use the existing locationId or create a new one
        locationId = locationId || (0, uuid_1.v4)();
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
                UpdateExpression: 'set userCurentLocationId = :locationId',
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
                UpdateExpression: 'set providerCurrentLocationId = :locationId',
                ExpressionAttributeValues: {
                    ':locationId': locationId,
                },
            };
            yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(providerParams));
        }
        return locationParams.Item;
    }),
    getLocationById: (locationId) => __awaiter(void 0, void 0, void 0, function* () {
        const locationParams = {
            TableName: LOCATION_TABLE_NAME,
            Key: { id: locationId },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(locationParams));
        if (!result.Item) {
            throw new Error('Location not found');
        }
        const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(result.Item);
        if (!locationValidationResult.success) {
            throw new Error('Invalid location data');
        }
        return result.Item;
    }),
};
module.exports = LocationService;
