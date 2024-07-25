const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');
const {validateProviderData} = require('../utils/validateProvider')

const dynamoDB = require('../config/dbConfig');

const TABLE_NAME = 'Providers';


const ProviderService = {
  createProvider: async (providerData) => {
    // Validate provider data
    if (!validateProviderData(providerData)) {
      throw new Error('Provider data is invalid');
    }

    const provider = {
      ...providerData,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      _version: 1
    };

    const params = {
      TableName: TABLE_NAME,
      Item: provider,
    };

    await dynamoDB.send(new PutCommand(params));
    return provider;
  },

  getProviderById: async (providerId) => {
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
    return result.Item;
  },

  getAllProviders: async () => {
    const params = {
      TableName: TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items;
  },

  updateProvider: async (providerId, updateData) => {
    const fieldsToExclude = ['id', 'lastLogin']; // Fields that should not be updated
    
    const filteredUpdateData = Object.entries(updateData)
      .filter(([key]) => !fieldsToExclude.includes(key))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  
    const updateExpression = [];
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};
  
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
    return result.Attributes;
  },

  deleteProvider: async (providerId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: providerId,
      },
    };

    const result = await dynamoDB.send(new DeleteCommand(params));
    return result.Attributes;
  },
};

module.exports = ProviderService;
