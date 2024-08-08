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
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamoDB = require('../config/dbConfig');
const MAIN_CATEGORY_TABLE_NAME = process.env.TABLE_MAIN_CATEGORY;
const BOOKING_TABLE_NAME = process.env.TABLE_BOOKING;
const SERVICE_TABLE_NAME = process.env.TABLE_SERVICE;
const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;
const MainCategoryService = {
    getAllMainCategory: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: MAIN_CATEGORY_TABLE_NAME,
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        return result.Items;
    }),
    getTopMainCategories: (top) => __awaiter(void 0, void 0, void 0, function* () {
        // Fetch booking counts grouped by serviceBookingsId
        const bookingParams = {
            TableName: BOOKING_TABLE_NAME,
            IndexName: 'gsi-Service.bookings',
            ProjectionExpression: 'serviceBookingsId',
        };
        const bookingResult = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(bookingParams));
        if (!bookingResult.Items)
            throw new Error('No bookings found');
        // Count bookings per service
        const serviceBookingCount = {};
        bookingResult.Items.forEach((booking) => {
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
        const subCategoryIds = new Set();
        for (const serviceId of topServices) {
            const serviceParams = {
                TableName: SERVICE_TABLE_NAME,
                KeyConditionExpression: 'id = :id',
                ExpressionAttributeValues: {
                    ':id': serviceId,
                },
                ProjectionExpression: 'subCategoryServicesId',
            };
            const serviceResult = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(serviceParams));
            if (serviceResult.Items && serviceResult.Items.length > 0) {
                subCategoryIds.add(serviceResult.Items[0].subCategoryServicesId);
            }
        }
        // Fetch main categories for the top subcategories
        const mainCategoryCounts = {};
        for (const subCategoryId of subCategoryIds) {
            const subCategoryParams = {
                TableName: SUB_CATEGORY_TABLE_NAME,
                KeyConditionExpression: 'id = :id',
                ExpressionAttributeValues: {
                    ':id': subCategoryId,
                },
                ProjectionExpression: 'mainCategorySubCategoriesId',
            };
            const subCategoryResult = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(subCategoryParams));
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
        const mainCategoryResult = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(mainCategoryParams));
        if (!mainCategoryResult.Items)
            throw new Error('No main categories found');
        // Sort main categories by count and return the top N categories
        const sortedMainCategories = mainCategoryResult.Items.sort((a, b) => {
            return (mainCategoryCounts[b.id] || 0) - (mainCategoryCounts[a.id] || 0);
        }).slice(0, top);
        return sortedMainCategories;
    }),
};
module.exports = MainCategoryService;
