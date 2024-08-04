const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Booking, BookingStatus } from '../src/API';
import { bookingSchema, serviceSchema, providerSchema, userSchema, providerScheduleSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import ServiceService from './serviceService';
import ProviderService from './providerService';
import UserService from './userService';
import { UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';


const TABLE_NAME = process.env.TABLE_BOOKING;
const PROVIDER_SCHEDULE_TABLE_NAME= process.env.TABLE_PROVIDER_SCHEDULE;

const BookingService = {
  createBooking: async (bookingData: Partial<Booking>) => {
    const extendedBookingData = processSchemaAndData(bookingSchema, bookingData, "Booking");

    const validationResult = bookingSchema.safeParse(extendedBookingData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Booking data is invalid: ${errors}`);
    }

    const booking: Booking = {...validationResult.data, status: BookingStatus.PENDING};

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
      await BookingService.updateProviderSchedule(updatedBooking, updatedBooking.status);
    }

    return { ...booking, status };
  },
  updateProviderSchedule: async (booking: Booking, status: BookingStatus) => {
    const isScheduled = status === (BookingStatus.CONFIRMED || BookingStatus.IN_PROGRESS);

    const providerSchedule = {
      providerID: booking.providerProviderBookingsId ?? "",
      startTime: booking.startTime,
      endTime: booking.endTime,
      date: booking.date,
      isScheduled,
    };

    const extendedProviderScheduleData = processSchemaAndData(providerScheduleSchema, providerSchedule, "ProviderSchedule");

    const validationResult = bookingSchema.safeParse(extendedProviderScheduleData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Provider Schedule data is invalid: ${errors}`);
    }

    const params = {
      TableName: PROVIDER_SCHEDULE_TABLE_NAME,
      Item: validationResult.data,
    };

    await dynamoDB.send(new PutCommand(params));
  },
};

export = BookingService;
