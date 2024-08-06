import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const dynamoDB = require('../config/dbConfig');

const PROVIDER_AVAILIBILITY_TABLE_NAME = process.env.TABLE_PROVIDER_AVAILIBILITY;

const ProviderAvailabilityService = {
  getAllAvailabilityByProviderId: async (providerId: string) => {
    const params = {
      TableName: PROVIDER_AVAILIBILITY_TABLE_NAME,
      FilterExpression: 'providerProviderAvailabilityId = :providerProviderAvailabilityId and isScheduled = :isScheduled',
      ExpressionAttributeValues: {
        ':providerProviderAvailabilityId': providerId,
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

export = ProviderAvailabilityService;
