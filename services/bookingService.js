"use strict";
// services/BookingService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const uuid_1 = require("uuid");
const validateBooking_1 = require("../utils/validateBooking");
const dynamoDB = require('../config/dbConfig');
const API_1 = require("../src/API");
const TABLE_NAME = 'Bookings';
exports.BookingService = {
    /**
     * Creates a new booking.
     * @param {Partial<Booking>} bookingData
     * @returns {Promise<Booking>}
     */
    createBooking: (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // Validate booking data
        if (!(0, validateBooking_1.validateBookingData)(bookingData)) {
            throw new Error('Booking data is invalid');
        }
        // Filter bookingData to only include fields defined in the Booking interface
        const booking = {
            __typename: "Booking",
            id: (0, uuid_1.v4)(),
            date: bookingData.date,
            startTime: bookingData.startTime,
            endTime: bookingData.endTime,
            status: (_a = bookingData.status) !== null && _a !== void 0 ? _a : API_1.BookingStatus.PENDING,
            service: (_b = bookingData.service) !== null && _b !== void 0 ? _b : null,
            provider: (_c = bookingData.provider) !== null && _c !== void 0 ? _c : null,
            user: (_d = bookingData.user) !== null && _d !== void 0 ? _d : null,
            location: (_e = bookingData.location) !== null && _e !== void 0 ? _e : null,
            notes: (_f = bookingData.notes) !== null && _f !== void 0 ? _f : null,
            price: bookingData.price,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            _version: 1,
            _lastChangedAt: Date.now(),
            _deleted: null,
            serviceBookingsId: (_g = bookingData.serviceBookingsId) !== null && _g !== void 0 ? _g : null,
            providerProviderBookingsId: (_h = bookingData.providerProviderBookingsId) !== null && _h !== void 0 ? _h : null,
            userBookingsId: (_j = bookingData.userBookingsId) !== null && _j !== void 0 ? _j : null,
        };
        const params = {
            TableName: TABLE_NAME,
            Item: booking,
        };
        yield dynamoDB.send(new lib_dynamodb_1.PutCommand(params));
        return booking;
    }),
    /**
     * Gets a booking by ID.
     * @param {string} bookingId
     * @returns {Promise<Booking>}
     */
    getBookingById: (bookingId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: bookingId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(params));
        if (!result.Item) {
            throw new Error('Booking not found');
        }
        return result.Item;
    }),
    /**
     * Gets all bookings.
     * @returns {Promise<Booking[]>}
     */
    getAllBookings: () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        return result.Items;
    }),
    /**
     * Updates a booking by ID.
     * @param {string} bookingId
     * @param {Partial<Booking>} updateData
     * @returns {Promise<Booking>}
     */
    updateBooking: (bookingId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
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
            Key: { id: bookingId },
            UpdateExpression: `SET ${updateExpression.join(', ')}`,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW',
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(params));
        return result.Attributes;
    }),
    /**
     * Deletes a booking by ID.
     * @param {string} bookingId
     * @returns {Promise<Booking>}
     */
    deleteBooking: (bookingId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: bookingId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.DeleteCommand(params));
        return result.Attributes;
    }),
};
