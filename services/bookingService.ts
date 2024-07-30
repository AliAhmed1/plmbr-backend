const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { Booking } from '../src/API';
import { bookingSchema, serviceSchema, providerSchema, userSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import ServiceService from './serviceService';
import ProviderService from './providerService';
import UserService from './userService';

const TABLE_NAME = 'Bookings';

const BookingService = {
  createBooking: async (bookingData: Partial<Booking>) => {
    const extendedBookingData = processSchemaAndData(bookingSchema, bookingData, "Booking");

    const validationResult = bookingSchema.safeParse(extendedBookingData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Booking data is invalid: ${errors}`);
    }

    const booking: Booking = validationResult.data;

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
};

export = BookingService;
