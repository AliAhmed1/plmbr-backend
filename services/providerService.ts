const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Provider } from '../src/API';
import { providerSchema, locationSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import { GetItemCommand } from '@aws-sdk/client-dynamodb';
const haversineDistance = require('../utils/distance')

const TABLE_NAME_PROVIDERS = 'Providers';
const TABLE_NAME_LOCATIONS = 'Locations'
const ProviderService = {
  createProvider: async (providerData: Partial<Provider>) => {
    // Use the processSchemaAndData utility to add common fields and handle optional fields
    const extendedProviderData = processSchemaAndData(providerSchema, providerData, "Provider");

    const validationResult = providerSchema.safeParse(extendedProviderData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Provider data is invalid: ${errors}`);
    }

    const provider: Provider = validationResult.data;

    const params = {
      TableName: TABLE_NAME_PROVIDERS,
      Item: provider,
    };

    await dynamoDB.send(new PutCommand(params));
    return provider;
  },

  getProviderById: async (providerId: string) => {
    const params = {
      TableName: TABLE_NAME_PROVIDERS,
      Key: {
        id: providerId,
      },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('Provider not found');
    }
    return result.Item as Provider;
  },

  getAllProviders: async () => {
    const params = {
      TableName: TABLE_NAME_PROVIDERS,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items as Provider[];
  },

  updateProvider: async (providerId: string, updateData: Partial<Provider>) => {
    // Add common fields to update data for validation
    const extendedUpdateData = processSchemaAndData(providerSchema, updateData, "Provider");

    const validationResult = providerSchema.safeParse(extendedUpdateData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Provider update data is invalid: ${errors}`);
    }

    const filteredUpdateData = Object.entries(validationResult.data)
      .filter(([key]) => !['id', 'createdAt', 'updatedAt', 'lastLogin'].includes(key))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {} as Record<string, any>);

    const updateExpression: string[] = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};

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

    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes as Provider;
  },

  deleteProvider: async (providerId: string) => {
    const params = {
      TableName: TABLE_NAME_PROVIDERS,
      Key: {
        id: providerId,
      },
    };

    const result = await dynamoDB.send(new DeleteCommand(params));
    return result.Attributes as Provider;
  },

  updateProviderLocation: async (providerId: string, locationData: any) => {
    // Validate location data
    const locationValidationResult = locationSchema.safeParse(locationData);

    if (!locationValidationResult.success) {
      const errors = locationValidationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Location data is invalid: ${errors}`);
    }

    const existingProvider = await ProviderService.getProviderById(providerId);

    // Update provider with new location
    const updatedProviderData = {
      ...existingProvider,
      currentLocation: locationValidationResult.data,
      updatedAt: new Date().toISOString(),
    };

    // Validate updated provider data
    const providerValidationResult = providerSchema.safeParse(updatedProviderData);

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

    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes as Provider;
  },

  getProvidersWithinRange: async (lat: number, lon: number, range: number, checkInstantBooking: boolean) => {
    const params = {
      TableName: TABLE_NAME_PROVIDERS,
    };
  
    const result = await dynamoDB.send(new ScanCommand(params));
  
    if (!result.Items) {
      throw new Error('No providers found');
    }
  
    const providers = await Promise.all(result.Items.map(async (provider: Provider) => {
      if (provider.providerCurrentLocationId) {
        const locationParams = {
          TableName: TABLE_NAME_LOCATIONS,
          Key: {
            id: { S: provider.providerCurrentLocationId },
          },
        };
        const locationResult = await dynamoDB.send(new GetItemCommand(locationParams));
        const location = locationResult.Item;
  
        if (location) {
          const distance = haversineDistance(
            lat,
            lon,
            parseFloat(location.latitude.N),
            parseFloat(location.longitude.N)
          );
          if (distance <= range) {
            if (checkInstantBooking) {
              return provider.isInstantBookingAvailable ? provider : null;
            }
            return provider;
          }
        }
      }
      return null;
    }));
  
    return providers.filter(provider => provider !== null);
  },
  toggleInstantBooking: async (providerId: string, isInstantBookingAvailable: boolean) => {
    
    // Update the provider's isInstantBookingAvailable field
    const providerParams = {
      TableName: TABLE_NAME_PROVIDERS,
      Key: { id: providerId },
      UpdateExpression: 'set isInstantBookingAvailable = :isInstantBookingAvailable',
      ExpressionAttributeValues: {
        ':isInstantBookingAvailable': isInstantBookingAvailable,
      },
    };

    await dynamoDB.send(new UpdateCommand(providerParams));
    return { providerId, isInstantBookingAvailable };
  },
};

export = ProviderService;
