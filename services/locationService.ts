import { DynamoDBDocumentClient, PutCommand, UpdateCommand, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { processSchemaAndData } from '../utils/addCommonFields';
import { providerSchema, userSchema, locationSchema } from '../schema/generatedZodSchema';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Location, User } from '../src/API';
const dynamoDB = require('../config/dbConfig');

const LOCATION_TABLE_NAME = process.env.TABLE_LOCATION;
const PROVIDER_TABLE_NAME = process.env.TABLE_PROVIDER;
const USER_TABLE_NAME = process.env.TABLE_USER;

const LocationService = {
  setLocation: async (userId: string | null, providerId: string | null, locationData: Location) => {
    // Validate location data
    const extendedLocationData = processSchemaAndData(locationSchema, { ...locationData, timestamp: Date.now().toString() }, "Location");
    const locationValidationResult = locationSchema.safeParse({ ...extendedLocationData });

    if (!locationValidationResult.success) {
      console.error(locationValidationResult.error); // Log validation errors
      throw new Error('Invalid location data');
    }

    let locationId: string | null = null;

    // Fetch existing locationId from user or provider
    if (userId) {
      const userParams = {
        TableName: USER_TABLE_NAME,
        Key: { id: userId },
      };

      const userResult: {Item : User} = await dynamoDB.send(new GetCommand(userParams));
      locationId = userResult.Item?.userCurentLocationId || null;
    }

    if (providerId) {
      const providerParams = {
        TableName: PROVIDER_TABLE_NAME,
        Key: { id: providerId },
      };

      const providerResult = await dynamoDB.send(new GetCommand(providerParams));
      locationId = providerResult.Item?.providerCurrentLocationId || null;
    }

    // Use the existing locationId or create a new one
    locationId = locationId || uuidv4();
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
        UpdateExpression: 'set userCurentLocationId = :locationId',
        ExpressionAttributeValues: {
          ':locationId': locationId,
        },
      };

      await dynamoDB.send(new UpdateCommand(userParams));
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

      await dynamoDB.send(new UpdateCommand(providerParams));
    }

    return locationParams.Item;
  },
  getLocationById: async (locationId: string) => {
    const locationParams = {
      TableName: LOCATION_TABLE_NAME,
      Key: { id: locationId },
    };

    const result = await dynamoDB.send(new GetCommand(locationParams));
    if (!result.Item) {
      throw new Error('Location not found');
    }

    const locationValidationResult = locationSchema.safeParse(result.Item);
    if (!locationValidationResult.success) {
      throw new Error('Invalid location data');
    }

    return result.Item;
  },

  getLocationsByLocationIds: async (locationIds: string[]) => {
    if (!Array.isArray(locationIds) || locationIds.length === 0) {
      throw new Error('locationIds must be a non-empty array');
    }

    const locations = [];

    for (const locationId of locationIds) {
      const params = {
        TableName: LOCATION_TABLE_NAME,
        KeyConditionExpression: 'id = :locationId',
        ExpressionAttributeValues: {
          ':locationId': locationId,
        },
      };

      const result = await dynamoDB.send(new QueryCommand(params));

      if (result.Items && result.Items.length > 0) {
        const location = result.Items[0];

        // Validate the location data against the schema
        const validationResult = locationSchema.safeParse(location);
        if (!validationResult.success) {
          throw new Error(`Location data is invalid: ${validationResult.error.message}`);
        }

        locations.push(validationResult.data);
      }
    }

    return locations;
  },
};

export = LocationService;
