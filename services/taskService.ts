import { Tasks } from '../src/API';
import { QueryCommand } from '@aws-sdk/lib-dynamodb';
const dynamoDB = require('../config/dbConfig');
const { PutCommand, GetCommand, ScanCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');

const TASKS_TABLE_NAME = process.env.TABLE_TASKS;
const TaskService = {

    getAllTasksByServiceId: async (serviceId: string): Promise<Tasks[]> => {
        const params = {
            TableName: TASKS_TABLE_NAME,
            IndexName: 'gsi-Tasks.Services',  // Assuming there's a GSI for tasksServiceId
            KeyConditionExpression: 'tasksServiceId = :serviceId',
            ExpressionAttributeValues: {
                ':serviceId': serviceId,
            },
        };

        const result = await dynamoDB.send(new QueryCommand(params));
        return result.Items as Tasks[];
    },

    getByTaskId: async (taskId: string): Promise<Tasks | null> => {
        const params = {
            TableName: TASKS_TABLE_NAME,
            Key: {
                id: taskId,
            },
        };

        const result = await dynamoDB.send(new GetCommand(params));
        return result.Item as Tasks | null;
    },

    updateByTaskId: async (taskId: string, updates: { taskName?: string; taskTime?: number }): Promise<Tasks> => {
        const updateExpressionParts: string[] = [];
        const expressionAttributeValues: { [key: string]: any } = {};

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

        const result = await dynamoDB.send(new UpdateCommand(params));
        return result.Attributes as Tasks;
    },
};

export = TaskService 