const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Provider } from '../src/API';
import { providerSchema, locationSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';

const TABLE_NAME = 'Providers';

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
      TableName: TABLE_NAME,
      Item: provider,
    };

    await dynamoDB.send(new PutCommand(params));
    return provider;
  },

  getProviderById: async (providerId: string) => {
    const params = {
      TableName: TABLE_NAME,
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
      TableName: TABLE_NAME,
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
      TableName: TABLE_NAME,
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
      TableName: TABLE_NAME,
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
      TableName: TABLE_NAME,
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
};

export = ProviderService;
