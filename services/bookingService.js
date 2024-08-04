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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const API_1 = require("../src/API");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const serviceService_1 = __importDefault(require("./serviceService"));
const providerService_1 = __importDefault(require("./providerService"));
const userService_1 = __importDefault(require("./userService"));
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const TABLE_NAME = process.env.TABLE_BOOKING;
const PROVIDER_SCHEDULE_TABLE_NAME = process.env.TABLE_PROVIDER_SCHEDULE;
const BookingService = {
    createBooking: (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedBookingData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.bookingSchema, bookingData, "Booking");
        const validationResult = generatedZodSchema_1.bookingSchema.safeParse(extendedBookingData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Booking data is invalid: ${errors}`);
        }
        const booking = Object.assign(Object.assign({}, validationResult.data), { status: API_1.BookingStatus.PENDING });
        // Validate service, provider, and user
        if (booking.serviceBookingsId) {
            const serviceExists = yield serviceService_1.default.getServiceById(booking.serviceBookingsId);
            if (!serviceExists) {
                throw new Error(`Service not found: ${booking.serviceBookingsId}`);
            }
        }
        else {
            throw new Error('Service ID is required');
        }
        if (booking.providerProviderBookingsId) {
            const providerExists = yield providerService_1.default.getProviderById(booking.providerProviderBookingsId);
            if (!providerExists) {
                throw new Error(`Provider not found: ${booking.providerProviderBookingsId}`);
            }
        }
        else {
            throw new Error('Provider ID is required');
        }
        if (booking.userBookingsId) {
            const userExists = yield userService_1.default.getUserById(booking.userBookingsId);
            if (!userExists) {
                throw new Error(`User not found: ${booking.userBookingsId}`);
            }
        }
        else {
            throw new Error('User ID is required');
        }
        const params = {
            TableName: TABLE_NAME,
            Item: booking,
        };
        yield dynamoDB.send(new PutCommand(params));
        return booking;
    }),
    getBookingById: (bookingId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: bookingId,
            },
        };
        const result = yield dynamoDB.send(new GetCommand(params));
        if (!result.Item) {
            throw new Error('Booking not found');
        }
        return result.Item;
    }),
    updateBookingStatus: (bookingId, newStatus, userId, providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const getParams = {
            TableName: TABLE_NAME,
            Key: { id: bookingId },
        };
        const result = yield dynamoDB.send(new GetCommand(getParams));
        if (!result.Item) {
            throw new Error('Booking not found');
        }
        const booking = result.Item;
        if ((providerId && providerId !== booking.providerProviderBookingsId) || (userId && userId !== booking.userBookingsId)) {
            throw new Error(`data is not associated with your booking`);
        }
        // Validate status change based on the rules
        if (providerId && (newStatus === API_1.BookingStatus.CONFIRMED || newStatus === API_1.BookingStatus.CANCELLED)) {
            if (booking.status !== API_1.BookingStatus.PENDING) {
                throw new Error('Provider can only confirm or cancel a booking that is pending');
            }
        }
        else if (userId) {
            if (booking.status === API_1.BookingStatus.CONFIRMED && (newStatus === API_1.BookingStatus.IN_PROGRESS || newStatus === API_1.BookingStatus.CANCELLED)) {
                // User can set status to in-progress or cancelled if it's confirmed
            }
            else if (booking.status === API_1.BookingStatus.IN_PROGRESS && newStatus === API_1.BookingStatus.COMPLETED) {
                // User can set status to completed if it's in-progress
            }
            else {
                throw new Error('Invalid status transition for user');
            }
        }
        else {
            throw new Error('Invalid role for updating booking status');
        }
        const updateParams = {
            TableName: TABLE_NAME,
            Key: { id: bookingId },
            UpdateExpression: 'set #status = :status',
            ExpressionAttributeNames: {
                '#status': 'status',
            },
            ExpressionAttributeValues: {
                ':status': newStatus,
            },
            ReturnValues: 'ALL_NEW',
        };
        const updateResult = yield dynamoDB.send(new lib_dynamodb_1.UpdateCommand(updateParams));
        const updatedBooking = updateResult.Attributes;
        if (updatedBooking.providerProviderBookingsId && (updatedBooking.status === API_1.BookingStatus.CONFIRMED || updatedBooking.status === API_1.BookingStatus.CANCELLED || updatedBooking.status === API_1.BookingStatus.COMPLETED)) {
            yield BookingService.updateProviderSchedule(updatedBooking, updatedBooking.status);
        }
        return Object.assign(Object.assign({}, booking), { status });
    }),
    updateProviderSchedule: (booking, status) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const isScheduled = status === (API_1.BookingStatus.CONFIRMED || API_1.BookingStatus.IN_PROGRESS);
        const providerSchedule = {
            providerID: (_a = booking.providerProviderBookingsId) !== null && _a !== void 0 ? _a : "",
            startTime: booking.startTime,
            endTime: booking.endTime,
            date: booking.date,
            isScheduled,
        };
        const extendedProviderScheduleData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.providerScheduleSchema, providerSchedule, "ProviderSchedule");
        const validationResult = generatedZodSchema_1.bookingSchema.safeParse(extendedProviderScheduleData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Provider Schedule data is invalid: ${errors}`);
        }
        const params = {
            TableName: PROVIDER_SCHEDULE_TABLE_NAME,
            Item: validationResult.data,
        };
        yield dynamoDB.send(new PutCommand(params));
    }),
};
module.exports = BookingService;
