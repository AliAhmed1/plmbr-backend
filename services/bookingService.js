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
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const serviceService_1 = __importDefault(require("./serviceService"));
const providerService_1 = __importDefault(require("./providerService"));
const userService_1 = __importDefault(require("./userService"));
const TABLE_NAME = 'Bookings';
const BookingService = {
    createBooking: (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedBookingData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.bookingSchema, bookingData, "Booking");
        const validationResult = generatedZodSchema_1.bookingSchema.safeParse(extendedBookingData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Booking data is invalid: ${errors}`);
        }
        const booking = validationResult.data;
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
};
module.exports = BookingService;
