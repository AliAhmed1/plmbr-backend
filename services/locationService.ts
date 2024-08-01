import { DynamoDBDocumentClient, PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { processSchemaAndData } from '../utils/addCommonFields';
import { providerSchema, userSchema, locationSchema } from '../schema/generatedZodSchema';
import { z } from 'zod';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { Location } from '../src/API';
const dynamoDB = require('../config/dbConfig');


const LOCATION_TABLE_NAME = 'Locations';
const PROVIDER_TABLE_NAME = 'Providers';
const USER_TABLE_NAME = 'Users';

const LocationService = {

    setLocation: async (userId: string | null, providerId: string | null, locationData: Location) => {
        // Validate location data
        const extendedLocationData = processSchemaAndData(locationSchema, {...locationData ,timestamp : Date.now().toString()}, "Location");
        console.log('Extended Location Data:', extendedLocationData); // Log for debugging
        const locationValidationResult = locationSchema.safeParse({...extendedLocationData});

        if (!locationValidationResult.success) {
            console.error(locationValidationResult.error); // Log validation errors
            throw new Error('Invalid location data');
        }
        // Insert or update the location in the Location table
        const locationId = extendedLocationData?.id || uuidv4();
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

        return locationParams.Item;
    }
}

export = LocationService;
