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
const dynamoDB = require('../config/dbConfig');
const PROVIDER_AVAILIBILITY_TABLE_NAME = process.env.TABLE_PROVIDER_AVAILIBILITY;
const ProviderAvailabilityService = {
    getAllAvailabilityByProviderId: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: PROVIDER_AVAILIBILITY_TABLE_NAME,
            FilterExpression: 'providerProviderAvailabilityId = :providerProviderAvailabilityId and isScheduled = :isScheduled',
            ExpressionAttributeValues: {
                ':providerProviderAvailabilityId': providerId,
                ':isScheduled': true,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        if (!result.Items) {
            throw new Error('No schedules found');
        }
        return result.Items;
    }),
    getAllAvailabilityByProviderIdWithoutFilter: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: PROVIDER_AVAILIBILITY_TABLE_NAME,
            FilterExpression: 'providerProviderAvailabilityId = :providerProviderAvailabilityId',
            ExpressionAttributeValues: {
                ':providerProviderAvailabilityId': providerId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        if (!result.Items) {
            throw new Error('No schedules found');
        }
        return result.Items;
    }),
};
module.exports = ProviderAvailabilityService;
