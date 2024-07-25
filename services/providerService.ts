import { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { validateProviderData } from '../utils/validateProvider';
import dynamoDB from '../config/dbConfig';
import { Provider } from '../src/API';

const TABLE_NAME = 'Providers';

const ProviderService = {
  createProvider: async (providerData: Partial<Provider>) => {
    // Validate provider data
    if (!validateProviderData(providerData)) {
      throw new Error('Provider data is invalid');
    }

    const provider: Provider = {
      ...providerData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      _version: 1,
    };

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
    const fieldsToExclude = ['id', 'createdAt', 'updatedAt', 'lastLogin']; // Fields that should not be updated

    const filteredUpdateData = Object.entries(updateData)
      .filter(([key]) => !fieldsToExclude.includes(key))
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
};

export default ProviderService;
