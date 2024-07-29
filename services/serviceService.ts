import { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
const dynamoDB = require('../config/dbConfig');
import { Service } from '../src/API';
const { validateServiceData } = require('../utils/validateService');

const TABLE_NAME = 'Services';

const ServiceService = {
  createService: async (serviceData: Partial<Service>) => {
    // Validate service data
    if (!validateServiceData(serviceData)) {
      throw new Error('Service data is invalid');
    }

    // Filter serviceData to only include fields defined in the Service interface
    const service: Service = {
      __typename: "Service",
      id: uuidv4(),
      name: serviceData.name!,
      description: serviceData.description ?? null,
      price: serviceData.price!,
      Provider: serviceData.Provider ?? null,
      reviews: serviceData.reviews ?? null,
      bookings: serviceData.bookings ?? null,
      SubCategory: serviceData.SubCategory ?? null,
      servicePromotions: serviceData.servicePromotions ?? null,
      providerReports: serviceData.providerReports ?? null,
      userReports: serviceData.userReports ?? null,
      userInvoices: serviceData.userInvoices ?? null,
      providerBookmarks: serviceData.providerBookmarks ?? null,
      userBookmarks: serviceData.userBookmarks ?? null,
      providerNotifications: serviceData.providerNotifications ?? null,
      userNotifications: serviceData.userNotifications ?? null,
      serviceDiscounts: serviceData.serviceDiscounts ?? null,
      providerAvailabilities: serviceData.providerAvailabilities ?? null,
      userPreferences: serviceData.userPreferences ?? null,
      providerCertifications: serviceData.providerCertifications ?? null,
      serviceVideos: serviceData.serviceVideos ?? null,
      serviceImages: serviceData.serviceImages ?? null,
      serviceReviews: serviceData.serviceReviews ?? null,
      aiDiagnostics: serviceData.aiDiagnostics ?? null,
      customizations: serviceData.customizations ?? null,
      expenses: serviceData.expenses ?? null,
      favoriteProviders: serviceData.favoriteProviders ?? null,
      userHistories: serviceData.userHistories ?? null,
      providerAwards: serviceData.providerAwards ?? null,
      referrals: serviceData.referrals ?? null,
      contracts: serviceData.contracts ?? null,
      jobTrackings: serviceData.jobTrackings ?? null,
      duration: serviceData.duration ?? null,
      Materials: serviceData.Materials ?? null,
      MaterialCosts: serviceData.MaterialCosts ?? null,
      BookingRequirements: serviceData.BookingRequirements ?? null,
      isInstantBookingAvailable: serviceData.isInstantBookingAvailable ?? null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      _version: 1,
      _lastChangedAt: Date.now(),
      _deleted: null,
      invoiceServicesId: serviceData.invoiceServicesId ?? null,
      servicePackageServicesId: serviceData.servicePackageServicesId ?? null,
      subCategoryServicesId: serviceData.subCategoryServicesId ?? null,
      providerServicesOfferedId: serviceData.providerServicesOfferedId ?? null,
    };

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
    const fieldsToExclude = ['id', 'createdAt', 'updatedAt']; // Fields that should not be updated

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
      Key: { id: serviceId },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamoDB.send(new UpdateCommand(params as any));
    return result.Attributes as Service;
  },

  deleteService: async (serviceId: string) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: serviceId,
      },
    };

    const result = await dynamoDB.send(new DeleteCommand(params));
    return result.Attributes as Service;
  },
};

export = ServiceService;
