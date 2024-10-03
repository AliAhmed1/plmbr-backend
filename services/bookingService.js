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
const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const Stripe = require('stripe');
const API_1 = require("../src/API");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const serviceService_1 = __importDefault(require("./serviceService"));
const providerService_1 = __importDefault(require("./providerService"));
const userService_1 = __importDefault(require("./userService"));
const taskService_1 = __importDefault(require("./taskService"));
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const validationUtil_1 = require("../utils/validationUtil");
const validationUtil_2 = require("../utils/validationUtil");
const validationUtil_3 = require("../utils/validationUtil");
const calculateEndTime_1 = __importDefault(require("../utils/calculateEndTime"));
const paymentMethodService_1 = require("./paymentMethodService");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const TABLE_NAME = process.env.TABLE_BOOKING;
const PROVIDER_AVAILIBILITY_TABLE_NAME = process.env.TABLE_PROVIDER_AVAILIBILITY;
const BookingService = {
    createBooking: (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
        const { stripeCustomerId, paymentCardId } = bookingData, restBookingData = __rest(bookingData, ["stripeCustomerId", "paymentCardId"]);
        if (!paymentCardId) {
            throw new Error('payment card not found');
        }
        const extendedBookingData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.bookingSchema, restBookingData, "Booking");
        const validationResult = generatedZodSchema_1.bookingSchema.safeParse(extendedBookingData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`Booking data is invalid: ${errors}`);
        }
        const booking = Object.assign(Object.assign({}, validationResult.data), { status: API_1.BookingStatus.PENDING });
        // Validate date, time, and dateTime
        try {
            (0, validationUtil_1.validateDate)(booking.date);
            (0, validationUtil_2.validateTime)(booking.startTime);
        }
        catch (error) {
            throw new Error(`Invalid date or time: ${error.message}`);
        }
        // Validate service, provider, and user
        if (booking.serviceBookingsId) {
            const serviceExists = yield serviceService_1.default.getServiceById(booking.serviceBookingsId);
            if (!serviceExists) {
                throw new Error(`Service not found: ${booking.serviceBookingsId}`);
            }
            const tasks = yield taskService_1.default.getAllTasksByServiceId(booking.serviceBookingsId);
            if (!tasks) {
                throw new Error(`Error in service, Task not found`);
            }
            const taskTimes = tasks.map((task) => task.taskTime);
            booking.endTime = (0, calculateEndTime_1.default)(booking.startTime, taskTimes);
        }
        else {
            throw new Error('Service ID is required');
        }
        if (booking.providerProviderBookingsId) {
            const providerExists = yield providerService_1.default.getProviderById(booking.providerProviderBookingsId);
            if (!providerExists) {
                throw new Error(`Provider not found: ${booking.providerProviderBookingsId}`);
            }
            if ((providerExists.isInstantBookingAvailable !== undefined || providerExists.isInstantBookingAvailable !== null) && booking.isInstantBooking === undefined) {
                booking.isInstantBooking = providerExists.isInstantBookingAvailable;
            }
        }
        else {
            throw new Error('Provider ID is required');
        }
        // Validate user and payment card
        if (booking.userBookingsId) {
            const userExists = yield userService_1.default.getUserById(booking.userBookingsId);
            if (!userExists) {
                throw new Error(`User not found: ${booking.userBookingsId}`);
            }
            // Get payment cards for the user
            const paymentCards = yield (0, paymentMethodService_1.getAllPaymentCardsByUserId)(booking.userBookingsId);
            if (!paymentCards || paymentCards.length === 0) {
                throw new Error(`No payment cards found for user: ${booking.userBookingsId}`);
            }
            // Find the selected payment card
            const selectedCard = paymentCards.find(card => card.stripeCardId === paymentCardId);
            if (!selectedCard) {
                throw new Error(`Payment card not found: ${paymentCardId}`);
            }
            // Check card balance with Stripe
            try {
                const paymentIntent = yield stripe.paymentIntents.create({
                    amount: booking.price * 100, // Amount in cents
                    currency: 'usd', // Use appropriate currency
                    payment_method: selectedCard.stripeCardId,
                    customer: stripeCustomerId,
                    confirm: true, // Automatically confirm the PaymentIntent
                    automatic_payment_methods: {
                        enabled: true, // Enable automatic payment methods
                        allow_redirects: 'never', // Do not allow redirects
                    },
                });
                // Handle the result of the payment intent
                if (paymentIntent.status === 'succeeded') {
                    // Payment succeeded, proceed with booking
                }
                else if (paymentIntent.status === 'requires_action' || paymentIntent.status === 'requires_source_action') {
                    throw new Error('Additional authentication required for the payment');
                }
                else {
                    throw new Error('Payment failed');
                }
            }
            catch (error) {
                throw new Error(`Error creating payment intent: ${error.message}`);
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
            yield BookingService.updateProviderAvailabiliy(updatedBooking);
        }
        return updatedBooking;
    }),
    updateProviderAvailabiliy: (booking) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const startDate = new Date(`${booking.date}T${booking.startTime}Z`).toISOString();
        const endDate = new Date(`${booking.date}T${booking.endTime}Z`).toISOString();
        const isScheduled = booking.status === (API_1.BookingStatus.CONFIRMED || API_1.BookingStatus.IN_PROGRESS);
        try {
            (0, validationUtil_3.validateDateTime)(startDate);
            (0, validationUtil_3.validateDateTime)(endDate);
        }
        catch (error) {
            throw new Error(`Invalid date or time: ${error.message}`);
        }
        const providerAvailablity = {
            providerProviderAvailabilityId: (_a = booking.providerProviderBookingsId) !== null && _a !== void 0 ? _a : "",
            serviceProviderAvailabilitiesId: (_b = booking.serviceBookingsId) !== null && _b !== void 0 ? _b : "",
            startDate: startDate,
            endDate: endDate,
            isScheduled
        };
        const extendedProviderAvailabilityData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.providerAvailabilitySchema, providerAvailablity, "ProviderAvailability");
        const validationResult = generatedZodSchema_1.providerAvailabilitySchema.safeParse(extendedProviderAvailabilityData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map((e) => e.message).join(', ');
            throw new Error(`Provider Schedule data is invalid: ${errors}`);
        }
        const params = {
            TableName: PROVIDER_AVAILIBILITY_TABLE_NAME,
            Item: validationResult.data,
        };
        yield dynamoDB.send(new PutCommand(params));
    }),
    getAllBookingsByProviderId: (providerId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-Provider.providerBookings',
            KeyConditionExpression: 'providerProviderBookingsId = :providerId',
            ExpressionAttributeValues: {
                ':providerId': providerId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        return result.Items;
    }),
    getAllBookingsByServiceId: (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-Service.bookings',
            KeyConditionExpression: 'serviceBookingsId = :serviceId',
            ExpressionAttributeValues: {
                ':serviceId': serviceId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        return result.Items;
    }),
    getAllBookingsByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'gsi-User.bookings',
            KeyConditionExpression: 'userBookingsId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.QueryCommand(params));
        return result.Items;
    }),
};
module.exports = BookingService;
