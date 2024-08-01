import { DynamoDBDocumentClient, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { processSchemaAndData } from '../utils/addCommonFields';
import { providerSchema, userSchema, locationSchema } from '../schema/generatedZodSchema';
import { z } from 'zod';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const { uuidv4 } = require('uuid');
import { Location } from '../src/API';


const dynamoDB = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'your-region' }));
const LOCATION_TABLE_NAME = 'Locations';
const PROVIDER_TABLE_NAME = 'Providers';
const USER_TABLE_NAME = 'Users';

const setLocation = async (userId: string | null, providerId: string | null, locationData: Location) => {
  // Validate location data
  const extendedLocationData = processSchemaAndData(locationSchema, locationData, "Location");
  const locationValidationResult = locationSchema.safeParse(extendedLocationData);

  if (!locationValidationResult.success) {
    throw new Error('Invalid location data');
  }

  // Insert or update the location in the Location table
  const locationId = extendedLocationData.id || uuidv4();
  const locationParams = {
    TableName: LOCATION_TABLE_NAME,
    Item: { ...extendedLocationData, id: locationId },
  };

  await dynamoDB.send(new PutCommand(locationParams));

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

    await dynamoDB.send(new UpdateCommand(userParams));
  }

  if (providerId) {
    const extendedProviderData = processSchemaAndData(providerSchema, { id: providerId }, "Provider");
    const providerValidationResult = providerSchema.safeParse(extendedProviderData);

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

    await dynamoDB.send(new UpdateCommand(providerParams));
  }

  return { locationId };
};

export default setLocation;
