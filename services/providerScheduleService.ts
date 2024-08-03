import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const dynamoDB = require('../config/dbConfig');

const PROVIDER_SCHEDULE_TABLE_NAME = 'ProviderSchedules';

const ProviderScheduleService = {
  getAllSchedulesByProviderId: async (providerId: string) => {
    const params = {
      TableName: PROVIDER_SCHEDULE_TABLE_NAME,
      FilterExpression: 'providerID = :providerID and isScheduled = :isScheduled',
      ExpressionAttributeValues: {
        ':providerID': providerId,
        ':isScheduled': true,
      },
    };

    const result = await dynamoDB.send(new ScanCommand(params));

    if (!result.Items) {
      throw new Error('No schedules found');
    }

    return result.Items;
  },
};

export default ProviderScheduleService;
