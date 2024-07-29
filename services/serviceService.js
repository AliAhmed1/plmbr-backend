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
const uuid_1 = require("uuid");
const dynamoDB = require('../config/dbConfig');
const { validateServiceData } = require('../utils/validateService');
const TABLE_NAME = 'Services';
const ServiceService = {
    createService: (serviceData) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
        // Validate service data
        if (!validateServiceData(serviceData)) {
            throw new Error('Service data is invalid');
        }
        // Filter serviceData to only include fields defined in the Service interface
        const service = {
            __typename: "Service",
            id: (0, uuid_1.v4)(),
            name: serviceData.name,
            description: (_a = serviceData.description) !== null && _a !== void 0 ? _a : null,
            price: serviceData.price,
            Provider: (_b = serviceData.Provider) !== null && _b !== void 0 ? _b : null,
            reviews: (_c = serviceData.reviews) !== null && _c !== void 0 ? _c : null,
            bookings: (_d = serviceData.bookings) !== null && _d !== void 0 ? _d : null,
            SubCategory: (_e = serviceData.SubCategory) !== null && _e !== void 0 ? _e : null,
            servicePromotions: (_f = serviceData.servicePromotions) !== null && _f !== void 0 ? _f : null,
            providerReports: (_g = serviceData.providerReports) !== null && _g !== void 0 ? _g : null,
            userReports: (_h = serviceData.userReports) !== null && _h !== void 0 ? _h : null,
            userInvoices: (_j = serviceData.userInvoices) !== null && _j !== void 0 ? _j : null,
            providerBookmarks: (_k = serviceData.providerBookmarks) !== null && _k !== void 0 ? _k : null,
            userBookmarks: (_l = serviceData.userBookmarks) !== null && _l !== void 0 ? _l : null,
            providerNotifications: (_m = serviceData.providerNotifications) !== null && _m !== void 0 ? _m : null,
            userNotifications: (_o = serviceData.userNotifications) !== null && _o !== void 0 ? _o : null,
            serviceDiscounts: (_p = serviceData.serviceDiscounts) !== null && _p !== void 0 ? _p : null,
            providerAvailabilities: (_q = serviceData.providerAvailabilities) !== null && _q !== void 0 ? _q : null,
            userPreferences: (_r = serviceData.userPreferences) !== null && _r !== void 0 ? _r : null,
            providerCertifications: (_s = serviceData.providerCertifications) !== null && _s !== void 0 ? _s : null,
            serviceVideos: (_t = serviceData.serviceVideos) !== null && _t !== void 0 ? _t : null,
            serviceImages: (_u = serviceData.serviceImages) !== null && _u !== void 0 ? _u : null,
            serviceReviews: (_v = serviceData.serviceReviews) !== null && _v !== void 0 ? _v : null,
            aiDiagnostics: (_w = serviceData.aiDiagnostics) !== null && _w !== void 0 ? _w : null,
            customizations: (_x = serviceData.customizations) !== null && _x !== void 0 ? _x : null,
            expenses: (_y = serviceData.expenses) !== null && _y !== void 0 ? _y : null,
            favoriteProviders: (_z = serviceData.favoriteProviders) !== null && _z !== void 0 ? _z : null,
            userHistories: (_0 = serviceData.userHistories) !== null && _0 !== void 0 ? _0 : null,
            providerAwards: (_1 = serviceData.providerAwards) !== null && _1 !== void 0 ? _1 : null,
            referrals: (_2 = serviceData.referrals) !== null && _2 !== void 0 ? _2 : null,
            contracts: (_3 = serviceData.contracts) !== null && _3 !== void 0 ? _3 : null,
            jobTrackings: (_4 = serviceData.jobTrackings) !== null && _4 !== void 0 ? _4 : null,
            duration: (_5 = serviceData.duration) !== null && _5 !== void 0 ? _5 : null,
            Materials: (_6 = serviceData.Materials) !== null && _6 !== void 0 ? _6 : null,
            MaterialCosts: (_7 = serviceData.MaterialCosts) !== null && _7 !== void 0 ? _7 : null,
            BookingRequirements: (_8 = serviceData.BookingRequirements) !== null && _8 !== void 0 ? _8 : null,
            isInstantBookingAvailable: (_9 = serviceData.isInstantBookingAvailable) !== null && _9 !== void 0 ? _9 : null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            _version: 1,
            _lastChangedAt: Date.now(),
            _deleted: null,
            invoiceServicesId: (_10 = serviceData.invoiceServicesId) !== null && _10 !== void 0 ? _10 : null,
            servicePackageServicesId: (_11 = serviceData.servicePackageServicesId) !== null && _11 !== void 0 ? _11 : null,
            subCategoryServicesId: (_12 = serviceData.subCategoryServicesId) !== null && _12 !== void 0 ? _12 : null,
            providerServicesOfferedId: (_13 = serviceData.providerServicesOfferedId) !== null && _13 !== void 0 ? _13 : null,
        };
        const params = {
            TableName: TABLE_NAME,
            Item: service,
        };
        yield dynamoDB.send(new lib_dynamodb_1.PutCommand(params));
        return service;
    }),
    getServiceById: (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: serviceId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(params));
        if (!result.Item) {
            throw new Error('Service not found');
        }
        return result.Item;
    }),
    getAllServices: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        return result.Items;
    }),
    updateService: (serviceId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
        const fieldsToExclude = ['id', 'createdAt', 'updatedAt']; // Fields that should not be updated
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
            Key: { id: serviceId },
            UpdateExpression: `SET ${updateExpression.join(', ')}`,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(params));
        return result.Attributes;
    }),
    deleteService: (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: serviceId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.DeleteCommand(params));
        return result.Attributes;
    }),
};
module.exports = ServiceService;
