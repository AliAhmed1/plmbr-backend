const { PutCommand, GetCommand, ScanCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Service, Provider } from '../src/API';
import { serviceSchema, providerSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import ProviderService from './providerService';

const TABLE_NAME = 'Services';

const ServiceService = {
  createService: async (serviceData: Partial<Service>) => {
    const extendedServiceData = processSchemaAndData(serviceSchema, serviceData, "Service");

    const validationResult = serviceSchema.safeParse(extendedServiceData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Service data is invalid: ${errors}`);
    }

    const service: Service = validationResult.data;

    // Validate provider information
    if (service.Provider) {
      const providerValidationResult = providerSchema.safeParse(service.Provider);

      if (!providerValidationResult.success) {
        const errors = providerValidationResult.error.errors.map(e => e.message).join(', ');
        throw new Error(`Provider information is invalid: ${errors}`);
      }

      const providerExists = await ProviderService.getProviderById(service.Provider.id);

      if (!providerExists) {
        throw new Error(`Provider information is incorrect: Provider not found`);
      }
    } else {
      throw new Error(`Provider information is required`);
    }

    const params = {
      TableName: TABLE_NAME,
      Item: service,
    };

    await dynamoDB.send(new PutCommand(params));
    return service;
  },

  getServiceById: async (serviceId: string) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: serviceId,
      },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('Service not found');
    }
    return result.Item as Service;
  },

  getAllServices: async () => {
    const params = {
      TableName: TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items as Service[];
  },

  updateService: async (serviceId: string, updateData: Partial<Service>) => {
    const extendedUpdateData = processSchemaAndData(serviceSchema, updateData, "Service");

    const validationResult = serviceSchema.safeParse(extendedUpdateData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Service update data is invalid: ${errors}`);
    }

    // Validate provider information if present
    if (validationResult.data.Provider) {
      const providerValidationResult = providerSchema.safeParse(validationResult.data.Provider);

      if (!providerValidationResult.success) {
        const errors = providerValidationResult.error.errors.map(e => e.message).join(', ');
        throw new Error(`Provider information is invalid: ${errors}`);
      }

      const providerExists = await ProviderService.getProviderById(validationResult.data.Provider.id);

      if (!providerExists) {
        throw new Error(`Provider information is incorrect: Provider not found`);
      }
    }

    const filteredUpdateData = Object.entries(validationResult.data)
      .filter(([key]) => !['id', 'createdAt', 'updatedAt'].includes(key))
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
      Key: { id: serviceId },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes as Service;
  },
};

export = ServiceService;
