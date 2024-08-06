const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Booking, BookingStatus, ProviderAvailability } from '../src/API';
import { bookingSchema, serviceSchema, providerSchema, userSchema, providerAvailabilitySchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import ServiceService from './serviceService';
import ProviderService from './providerService';
import UserService from './userService';
import { QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { validateDate } from '../utils/validationUtil';
import { validateTime } from '../utils/validationUtil';
import { validateDateTime } from '../utils/validationUtil';


const TABLE_NAME = process.env.TABLE_BOOKING;
const PROVIDER_AVAILIBILITY_TABLE_NAME= process.env.TABLE_PROVIDER_AVAILIBILITY;

const BookingService = {
  createBooking: async (bookingData: Partial<Booking>) => {
    const extendedBookingData = processSchemaAndData(bookingSchema, bookingData, "Booking");

    const validationResult = bookingSchema.safeParse(extendedBookingData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Booking data is invalid: ${errors}`);
    }

    const booking: Booking = {...validationResult.data, status: BookingStatus.PENDING};

     // Validate date, time, and dateTime
     try {
      validateDate(booking.date);
      validateTime(booking.startTime);
    } catch (error: any) {
      throw new Error(`Invalid date or time: ${error.message}`);
    }
    
    // Validate service, provider, and user
    if (booking.serviceBookingsId) {
      const serviceExists = await ServiceService.getServiceById(booking.serviceBookingsId);
      if (!serviceExists) {
        throw new Error(`Service not found: ${booking.serviceBookingsId}`);
      }
    } else {
      throw new Error('Service ID is required');
    }

    if (booking.providerProviderBookingsId) {
      const providerExists = await ProviderService.getProviderById(booking.providerProviderBookingsId);
      if (!providerExists) {
        throw new Error(`Provider not found: ${booking.providerProviderBookingsId}`);
      }
      if(providerExists.isInstantBookingAvailable !== undefined || providerExists.isInstantBookingAvailable !== null || booking.isInstantBooking === undefined){
        booking.isInstantBooking = providerExists.isInstantBookingAvailable;
      }
    } else {
      throw new Error('Provider ID is required');
    }

    if (booking.userBookingsId) {
      const userExists = await UserService.getUserById(booking.userBookingsId);
      if (!userExists) {
        throw new Error(`User not found: ${booking.userBookingsId}`);
      }
    } else {
      throw new Error('User ID is required');
    }

    const params = {
      TableName: TABLE_NAME,
      Item: booking,
    };

    await dynamoDB.send(new PutCommand(params));
    return booking;
  },

  getBookingById: async (bookingId: string) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: bookingId,
      },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('Booking not found');
    }
    return result.Item as Booking;
  },
  updateBookingStatus: async (bookingId: string, newStatus: BookingStatus, userId: string | null, providerId: string | null) => {
    const getParams = {
      TableName: TABLE_NAME,
      Key: { id: bookingId },
    };

    const result = await dynamoDB.send(new GetCommand(getParams));
    if (!result.Item) {
      throw new Error('Booking not found');
    }

    const booking = result.Item as Booking;

    if((providerId && providerId !== booking.providerProviderBookingsId) || (userId && userId !== booking.userBookingsId)){
      throw new Error(`data is not associated with your booking`);
    }

    // Validate status change based on the rules
    if (providerId && (newStatus === BookingStatus.CONFIRMED || newStatus === BookingStatus.CANCELLED)) {
      if (booking.status !== BookingStatus.PENDING) {
        throw new Error('Provider can only confirm or cancel a booking that is pending');
      }
    } else if (userId) {
      if (booking.status === BookingStatus.CONFIRMED && (newStatus === BookingStatus.IN_PROGRESS || newStatus === BookingStatus.CANCELLED)) {
        // User can set status to in-progress or cancelled if it's confirmed
      } else if (booking.status === BookingStatus.IN_PROGRESS && newStatus === BookingStatus.COMPLETED) {
        // User can set status to completed if it's in-progress
      } else {
        throw new Error('Invalid status transition for user');
      }
    } else {
      throw new Error('Invalid role for updating booking status');
    }

    const updateParams: any = {
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

    const updateResult = await dynamoDB.send(new UpdateCommand(updateParams));
    const updatedBooking = updateResult.Attributes as Booking;

    if (updatedBooking.providerProviderBookingsId && (updatedBooking.status === BookingStatus.CONFIRMED || updatedBooking.status === BookingStatus.CANCELLED || updatedBooking.status === BookingStatus.COMPLETED)) {
      await BookingService.updateProviderAvailabiliy(updatedBooking);
    }

    return updatedBooking;
  },
  updateProviderAvailabiliy: async (booking: Booking) => {
    const startDate =  new Date(`${booking.date}T${booking.startTime}Z`).toISOString();
    const endDate = new Date(`${booking.date}T${booking.endTime}Z`).toISOString();
    const isScheduled = booking.status === (BookingStatus.CONFIRMED || BookingStatus.IN_PROGRESS);

    try {
      validateDateTime(startDate);
      validateDateTime(endDate);
    } catch (error: any) {
      throw new Error(`Invalid date or time: ${error.message}`);
    }
    
    const providerAvailablity = {
      providerProviderAvailabilityId: booking.providerProviderBookingsId ?? "",
      serviceProviderAvailabilitiesId: booking.serviceBookingsId ?? "",
      startDate: startDate,
      endDate: endDate,
      isScheduled
    };

    const extendedProviderAvailabilityData: ProviderAvailability = processSchemaAndData(providerAvailabilitySchema, providerAvailablity, "ProviderAvailability");

    const validationResult = providerAvailabilitySchema.safeParse(extendedProviderAvailabilityData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((e: { message: any; }) => e.message).join(', ');
      throw new Error(`Provider Schedule data is invalid: ${errors}`);
    }

    const params = {
      TableName: PROVIDER_AVAILIBILITY_TABLE_NAME,
      Item: validationResult.data,
    };

    await dynamoDB.send(new PutCommand(params));
  },
  getAllBookingsByProviderId: async (providerId: string) => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: 'providerProviderBookingsId-index',
      KeyConditionExpression: 'providerProviderBookingsId = :providerId',
      ExpressionAttributeValues: {
        ':providerId': providerId,
      },
    };

    const result = await dynamoDB.send(new QueryCommand(params));
    return result.Items;
  },

  getAllBookingsByServiceId: async (serviceId: string) => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: 'serviceBookingsId-index',
      KeyConditionExpression: 'serviceBookingsId = :serviceId',
      ExpressionAttributeValues: {
        ':serviceId': serviceId,
      },
    };

    const result = await dynamoDB.send(new QueryCommand(params));
    return result.Items;
  },

  getAllBookingsByUserId: async (userId: string) => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: 'userBookingsId-index',
      KeyConditionExpression: 'userBookingsId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    };

    const result = await dynamoDB.send(new QueryCommand(params));
    return result.Items;
  },
};

export = BookingService;
