"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const { PutCommand, GetCommand, ScanCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const providerService_1 = __importDefault(require("./providerService"));
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const SubCategoryService = require("./subCategoryService");
const TABLE_NAME = process.env.TABLE_SERVICE;
const TASKS_TABLE_NAME = process.env.TABLE_TASKS;
const ServiceService = {
    createService: (serviceData, skipProviderCheck) => __awaiter(void 0, void 0, void 0, function* () {
        const { Tasks } = serviceData, restOfServiceData = __rest(serviceData, ["Tasks"]);
        const extendedServiceData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.serviceSchema, restOfServiceData, "Service");
        const validationResult = generatedZodSchema_1.serviceSchema.safeParse(extendedServiceData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Service data is invalid: ${errors}`);
        }
        const service = validationResult.data;
        // Validate providerId
        if (!skipProviderCheck) {
            if (service.providerServicesOfferedId) {
                const providerExists = yield providerService_1.default.getProviderById(service.providerServicesOfferedId);
                if (!providerExists) {
                    throw new Error(`Provider information is incorrect: Provider not found`);
                }
            }
            else {
                throw new Error(`Provider information is required`);
            }
        }
        // Validate subCategoryId
        if (service.subCategoryServicesId) {
            const subCategoryExists = yield SubCategoryService.getBySubCategoryId(service.subCategoryServicesId);
            if (!subCategoryExists) {
                throw new Error(`SubCategory information is incorrect: SubCategory not found`);
            }
        }
        else {
            throw new Error(`SubCategory information is required`);
        }
        const taskArray = Tasks;
        // Handle Tasks
        if (taskArray && taskArray.length > 0) {
            for (const taskData of taskArray) {
                const extendedTaskData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.tasksSchema, taskData, "Tasks");
                const taskValidationResult = generatedZodSchema_1.tasksSchema.safeParse(extendedTaskData);
                if (!taskValidationResult.success) {
                    const errors = taskValidationResult.error.errors.map(e => e.message).join(', ');
                    throw new Error(`Task data is invalid: ${errors}`);
                }
                const task = Object.assign(Object.assign({}, taskValidationResult.data), { tasksServiceId: service.id });
                // Save task to DynamoDB
                const taskParams = {
                    TableName: TASKS_TABLE_NAME,
                    Item: task,
                };
                yield dynamoDB.send(new PutCommand(taskParams));
            }
        }
        else {
            throw new Error(`Service must have at least one task`);
        }
        const params = {
            TableName: TABLE_NAME,
            Item: service,
        };
        yield dynamoDB.send(new PutCommand(params));
        return service;
    }),
    getServiceById: (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: serviceId,
            },
        };
        const result = yield dynamoDB.send(new GetCommand(params));
        if (!result.Item) {
            throw new Error('Service not found');
        }
        return result.Item;
    }),
    getAllServices: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
        };
        const result = yield dynamoDB.send(new ScanCommand(params));
        return result.Items;
    }),
    updateService: (serviceId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedUpdateData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.serviceSchema, updateData, "Service");
        const validationResult = generatedZodSchema_1.serviceSchema.safeParse(extendedUpdateData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Service update data is invalid: ${errors}`);
        }
        const filteredUpdateData = Object.entries(validationResult.data)
            .filter(([key]) => !['id', 'providerId', 'createdAt', 'updatedAt'].includes(key))
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
            Key: { id: serviceId },
            UpdateExpression: `SET ${updateExpression.join(', ')}`,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new UpdateCommand(params));
        return result.Attributes;
    }),
    getAllServicesByProviderId: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-Provider.servicesOffered', // Ensure you have a GSI on providerId
            KeyConditionExpression: 'providerServicesOfferedId = :providerServicesOfferedId',
            ExpressionAttributeValues: {
                ':providerServicesOfferedId': providerId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        if (!result.Items) {
            throw new Error('No services found for the provided provider ID');
        }
        return result.Items;
    }),
    getServicesBySubCategoryId: (subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
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
            const data = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
            const services = data.Items;
            // Validate each service against the schema
            const validatedServices = services.map((service) => {
                const validationResult = generatedZodSchema_1.serviceSchema.safeParse(service);
                if (!validationResult.success) {
                    throw new Error(`Invalid service data: ${validationResult.error.message}`);
                }
                return validationResult.data;
            });
            return validatedServices;
        }
        catch (error) {
            throw new Error(`Error retrieving services by subCategoryId: ${error.message}`);
        }
    }),
};
module.exports = ServiceService;
