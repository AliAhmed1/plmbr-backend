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
const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const serviceService_1 = require("./serviceService");
const haversineDistance = require('../utils/distance');
const TABLE_NAME_PROVIDERS = process.env.TABLE_PROVIDER;
const TABLE_NAME_LOCATIONS = process.env.TABLE_LOCATION;
const ProviderService = {
    createProvider: (providerData) => __awaiter(void 0, void 0, void 0, function* () {
        // Use the processSchemaAndData utility to add common fields and handle optional fields
        const { service } = providerData, restProviderData = __rest(providerData, ["service"]);
        const extendedProviderData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.providerSchema, restProviderData, "Provider");
        const validationResult = generatedZodSchema_1.providerSchema.safeParse(extendedProviderData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Provider data is invalid: ${errors}`);
        }
        const provider = validationResult.data;
        if (service) {
            yield (0, serviceService_1.createService)(Object.assign({ providerServicesOfferedId: provider.id }, service), true);
        }
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
            Item: provider,
        };
        yield dynamoDB.send(new PutCommand(params));
        return provider;
    }),
    getProviderById: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
            Key: {
                id: providerId,
            },
        };
        const result = yield dynamoDB.send(new GetCommand(params));
        if (!result.Item) {
            throw new Error('Provider not found');
        }
        return result.Item;
    }),
    getProviderByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
            IndexName: 'gsi-Email.providers',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: { ':email': email },
        };
        const result = yield dynamoDB.send(new QueryCommand(params));
        return result.Items && result.Items.length > 0 ? result.Items[0] : null;
    }),
    getAllProviders: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
        };
        const result = yield dynamoDB.send(new ScanCommand(params));
        return result.Items;
    }),
    updateProvider: (providerId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
        // Add common fields to update data for validation
        const extendedUpdateData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.providerSchema, updateData, "Provider");
        const validationResult = generatedZodSchema_1.providerSchema.safeParse(extendedUpdateData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Provider update data is invalid: ${errors}`);
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
            TableName: TABLE_NAME_PROVIDERS,
            Key: { id: providerId },
            UpdateExpression: `SET ${updateExpression.join(', ')}`,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
    deleteProvider: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
            Key: {
                id: providerId,
            },
        };
        const result = yield dynamoDB.send(new DeleteCommand(params));
        return result.Attributes;
    }),
    updateProviderLocation: (providerId, locationData) => __awaiter(void 0, void 0, void 0, function* () {
        // Validate location data
        const locationValidationResult = generatedZodSchema_1.locationSchema.safeParse(locationData);
        if (!locationValidationResult.success) {
            const errors = locationValidationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Location data is invalid: ${errors}`);
        }
        const existingProvider = yield ProviderService.getProviderById(providerId);
        // Update provider with new location
        const updatedProviderData = Object.assign(Object.assign({}, existingProvider), { currentLocation: locationValidationResult.data, updatedAt: new Date().toISOString() });
        // Validate updated provider data
        const providerValidationResult = generatedZodSchema_1.providerSchema.safeParse(updatedProviderData);
        if (!providerValidationResult.success) {
            const errors = providerValidationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Updated provider data is invalid: ${errors}`);
        }
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
            Key: { id: providerId },
            UpdateExpression: 'SET currentLocation = :currentLocation, updatedAt = :updatedAt',
            ExpressionAttributeValues: {
                ':currentLocation': locationValidationResult.data,
                ':updatedAt': updatedProviderData.updatedAt,
            },
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
    getProvidersWithinRange: (lat, lon, range, checkInstantBooking) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME_PROVIDERS,
        };
        const result = yield dynamoDB.send(new ScanCommand(params));
        if (!result.Items) {
            throw new Error('No providers found');
        }
        const providers = yield Promise.all(result.Items.map((provider) => __awaiter(void 0, void 0, void 0, function* () {
            if (provider.providerCurrentLocationId) {
                const locationParams = {
                    TableName: TABLE_NAME_LOCATIONS,
                    Key: {
                        id: { S: provider.providerCurrentLocationId },
                    },
                };
                const locationResult = yield dynamoDB.send(new client_dynamodb_1.GetItemCommand(locationParams));
                const location = locationResult.Item;
                if (location) {
                    const distance = haversineDistance(lat, lon, parseFloat(location.latitude.N), parseFloat(location.longitude.N));
                    if (distance <= range) {
                        if (checkInstantBooking) {
                            return provider.isInstantBookingAvailable ? provider : null;
                        }
                        return provider;
                    }
                }
            }
            return null;
        })));
        return providers.filter(provider => provider !== null);
    }),
    toggleInstantBooking: (providerId, isInstantBookingAvailable) => __awaiter(void 0, void 0, void 0, function* () {
        // Update the provider's isInstantBookingAvailable field
        const providerParams = {
            TableName: TABLE_NAME_PROVIDERS,
            Key: { id: providerId },
            UpdateExpression: 'set isInstantBookingAvailable = :isInstantBookingAvailable',
            ExpressionAttributeValues: {
                ':isInstantBookingAvailable': isInstantBookingAvailable,
            },
        };
        yield dynamoDB.send(new UpdateCommand(providerParams));
        return { providerId, isInstantBookingAvailable };
    }),
};
module.exports = ProviderService;
