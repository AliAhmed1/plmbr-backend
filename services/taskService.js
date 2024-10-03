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
const { PutCommand, GetCommand, ScanCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const TASKS_TABLE_NAME = process.env.TABLE_TASKS;
const TaskService = {
    getAllTasksByServiceId: (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TASKS_TABLE_NAME,
            IndexName: 'gsi-Tasks.Services', // Assuming there's a GSI for tasksServiceId
            KeyConditionExpression: 'tasksServiceId = :serviceId',
            ExpressionAttributeValues: {
                ':serviceId': serviceId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        return result.Items;
    }),
    getByTaskId: (taskId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TASKS_TABLE_NAME,
            Key: {
                id: taskId,
            },
        };
        const result = yield dynamoDB.send(new GetCommand(params));
        return result.Item;
    }),
    updateByTaskId: (taskId, updates) => __awaiter(void 0, void 0, void 0, function* () {
        const updateExpressionParts = [];
        const expressionAttributeValues = {};
        if (updates.taskName) {
            updateExpressionParts.push('taskName = :taskName');
            expressionAttributeValues[':taskName'] = updates.taskName;
        }
        if (updates.taskTime) {
            updateExpressionParts.push('taskTime = :taskTime');
            expressionAttributeValues[':taskTime'] = updates.taskTime;
        }
        const params = {
            TableName: TASKS_TABLE_NAME,
            Key: {
                id: taskId,
            },
            UpdateExpression: `SET ${updateExpressionParts.join(', ')}`,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
};
module.exports = TaskService;
