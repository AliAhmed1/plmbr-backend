const { PutCommand, GetCommand, ScanCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Service, Provider, Tasks } from '../src/API';
import { serviceSchema, providerSchema, tasksSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import ProviderService from './providerService';
import { QueryCommand } from '@aws-sdk/lib-dynamodb';
const SubCategoryService = require("./subCategoryService")

const TABLE_NAME = process.env.TABLE_SERVICE;
const TASKS_TABLE_NAME = process.env.TABLE_TASKS;

const ServiceService = {
  createService: async (serviceData: Partial<Service>, skipProviderCheck?: Boolean) => {

    const { Tasks, ...restOfServiceData } = serviceData;

    const extendedServiceData = processSchemaAndData(serviceSchema, restOfServiceData, "Service");

    const validationResult = serviceSchema.safeParse(extendedServiceData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Service data is invalid: ${errors}`);
    }

    const service = validationResult.data;

    // Validate providerId
    if (!skipProviderCheck) {
      if (service.providerServicesOfferedId) {
        const providerExists = await ProviderService.getProviderById(service.providerServicesOfferedId);

        if (!providerExists) {
          throw new Error(`Provider information is incorrect: Provider not found`);
        }
      } else {
        throw new Error(`Provider information is required`);
      }
    }

    // Validate subCategoryId
    if (service.subCategoryServicesId) {
      const subCategoryExists = await SubCategoryService.getBySubCategoryId(service.subCategoryServicesId);

      if (!subCategoryExists) {
        throw new Error(`SubCategory information is incorrect: SubCategory not found`);
      }
    } else {
      throw new Error(`SubCategory information is required`);
    }

    const taskArray: any = Tasks;
    // Handle Tasks
    if (taskArray && taskArray.length > 0) {
      for (const taskData of taskArray) {
        const extendedTaskData = processSchemaAndData(tasksSchema, taskData, "Tasks");
        const taskValidationResult = tasksSchema.safeParse(extendedTaskData);

        if (!taskValidationResult.success) {
          const errors = taskValidationResult.error.errors.map(e => e.message).join(', ');
          throw new Error(`Task data is invalid: ${errors}`);
        }

        const task: Tasks = {
          ...taskValidationResult.data,
          tasksServiceId: service.id, // Link task to the service
        };

        // Save task to DynamoDB
        const taskParams = {
          TableName: TASKS_TABLE_NAME,
          Item: task,
        };
        await dynamoDB.send(new PutCommand(taskParams));
      }
    } else {
      throw new Error(`Service must have at least one task`);
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


    const filteredUpdateData = Object.entries(validationResult.data)
      .filter(([key]) => !['id', 'providerId', 'createdAt', 'updatedAt'].includes(key))
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
  getAllServicesByProviderId: async (providerId: string) => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: 'gsi-Provider.servicesOffered', // Ensure you have a GSI on providerId
      KeyConditionExpression: 'providerServicesOfferedId = :providerServicesOfferedId',
      ExpressionAttributeValues: {
        ':providerServicesOfferedId': providerId,
      },
    };

    const result = await dynamoDB.send(new QueryCommand(params));
    if (!result.Items) {
      throw new Error('No services found for the provided provider ID');
    }
    return result.Items;
  },

  getServicesBySubCategoryId: async (subCategoryId: String) => {
    // Define the query parameters to filter services by subCategoryServicesId
    const params = {
      TableName: TABLE_NAME, // Replace with your actual service table name
      IndexName: "gsi-SubCategory.Services", // Ensure you have this GSI set up
      KeyConditionExpression: "subCategoryServicesId = :subCategoryId",
      ExpressionAttributeValues: {
        ":subCategoryId": subCategoryId,
      },
    };

    try {
      const data = await dynamoDB.send(new QueryCommand(params));
      const services = data.Items;

      // Validate each service against the schema
      const validatedServices = services.map((service: Service) => {
        const validationResult = serviceSchema.safeParse(service);
        if (!validationResult.success) {
          throw new Error(`Invalid service data: ${validationResult.error.message}`);
        }
        return validationResult.data;
      });

      return validatedServices;
    } catch (error: any) {
      throw new Error(`Error retrieving services by subCategoryId: ${error.message}`);
    }
  },

};

export = ServiceService;
