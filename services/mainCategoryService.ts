import { DynamoDBDocumentClient, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { bookingSchema, serviceSchema, subCategorySchema, mainCategorySchema } from '../schema/generatedZodSchema';
import { z } from 'zod';
const dynamoDB = require('../config/dbConfig');

const MAIN_CATEGORY_TABLE_NAME = process.env.TABLE_MAIN_CATEGORY;
const BOOKING_TABLE_NAME = process.env.TABLE_BOOKING;
const SERVICE_TABLE_NAME = process.env.TABLE_SERVICE;
const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;

const MainCategoryService = {
  getAllMainCategory: async () => {
    const params = {
      TableName: MAIN_CATEGORY_TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items;
  },

  getTopMainCategories: async (top: number) => {
    // Fetch booking counts grouped by serviceBookingsId
    const bookingParams = {
      TableName: BOOKING_TABLE_NAME,
      IndexName: 'gsi-Service.bookings',
      ProjectionExpression: 'serviceBookingsId',
    };
    const bookingResult = await dynamoDB.send(new ScanCommand(bookingParams));
    if (!bookingResult.Items) throw new Error('No bookings found');

    // Count bookings per service
    const serviceBookingCount: { [key: string]: number } = {};
    bookingResult.Items.forEach((booking: z.infer<typeof bookingSchema>) => {
      const serviceId = booking.serviceBookingsId;
      if (serviceId) {
        if (!serviceBookingCount[serviceId]) {
          serviceBookingCount[serviceId] = 0;
        }
        serviceBookingCount[serviceId]++;
      }
    });

    // Sort services by booking count and take the top N services
    const topServices = Object.keys(serviceBookingCount)
      .sort((a, b) => serviceBookingCount[b] - serviceBookingCount[a])
      .slice(0, top);

    // Fetch subcategories for the top services
    const subCategoryIds: Set<string> = new Set();
    for (const serviceId of topServices) {
      const serviceParams = {
        TableName: SERVICE_TABLE_NAME,
        KeyConditionExpression: 'id = :id',
        ExpressionAttributeValues: {
          ':id': serviceId,
        },
        ProjectionExpression: 'subCategoryServicesId',
      };
      const serviceResult = await dynamoDB.send(new QueryCommand(serviceParams));
      if (serviceResult.Items && serviceResult.Items.length > 0) {
        subCategoryIds.add(serviceResult.Items[0].subCategoryServicesId);
      }
    }

    // Fetch main categories for the top subcategories
    const mainCategoryCounts: { [key: string]: number } = {};
    for (const subCategoryId of subCategoryIds) {
      const subCategoryParams = {
        TableName: SUB_CATEGORY_TABLE_NAME,
        KeyConditionExpression: 'id = :id',
        ExpressionAttributeValues: {
          ':id': subCategoryId,
        },
        ProjectionExpression: 'mainCategorySubCategoriesId',
      };
      const subCategoryResult = await dynamoDB.send(new QueryCommand(subCategoryParams));
      if (subCategoryResult.Items && subCategoryResult.Items.length > 0) {
        const mainCategoryId = subCategoryResult.Items[0].mainCategorySubCategoriesId;
        if (!mainCategoryCounts[mainCategoryId]) {
          mainCategoryCounts[mainCategoryId] = 0;
        }
        mainCategoryCounts[mainCategoryId]++;
      }
    }

    // Fetch all main categories
    const mainCategoryParams = { TableName: MAIN_CATEGORY_TABLE_NAME };
    const mainCategoryResult = await dynamoDB.send(new ScanCommand(mainCategoryParams));
    if (!mainCategoryResult.Items) throw new Error('No main categories found');

    // Sort main categories by count and return the top N categories
    const sortedMainCategories = mainCategoryResult.Items.sort((a: any, b: any) => {
      return (mainCategoryCounts[b.id] || 0) - (mainCategoryCounts[a.id] || 0);
    }).slice(0, top);

    return sortedMainCategories;
  },
};

export = MainCategoryService;
