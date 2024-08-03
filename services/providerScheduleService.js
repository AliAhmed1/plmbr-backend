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
const dynamoDB = require('../config/dbConfig');
const PROVIDER_SCHEDULE_TABLE_NAME = 'ProviderSchedules';
const ProviderScheduleService = {
    getAllSchedulesByProviderId: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: PROVIDER_SCHEDULE_TABLE_NAME,
            FilterExpression: 'providerID = :providerID and isScheduled = :isScheduled',
            ExpressionAttributeValues: {
                ':providerID': providerId,
                ':isScheduled': true,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        if (!result.Items) {
            throw new Error('No schedules found');
        }
        return result.Items;
    }),
};
exports.default = ProviderScheduleService;
