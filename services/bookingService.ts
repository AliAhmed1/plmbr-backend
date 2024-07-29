// services/BookingService.ts

import { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { validateBookingData } from '../utils/validateBooking';
const dynamoDB = require('../config/dbConfig');
import { Booking, BookingStatus } from '../src/API';

const TABLE_NAME = 'Bookings';

export const BookingService = {
  /**
   * Creates a new booking.
   * @param {Partial<Booking>} bookingData
   * @returns {Promise<Booking>}
   */
  createBooking: async (bookingData: Partial<Booking>): Promise<Booking> => {
    // Validate booking data
    if (!validateBookingData(bookingData)) {
      throw new Error('Booking data is invalid');
    }

    // Filter bookingData to only include fields defined in the Booking interface
    const booking: Booking = {
      __typename: "Booking",
      id: uuidv4(),
      date: bookingData.date!,
      startTime: bookingData.startTime!,
      endTime: bookingData.endTime!,
      status: bookingData.status ?? BookingStatus.PENDING,
      service: bookingData.service ?? null,
      provider: bookingData.provider ?? null,
      user: bookingData.user ?? null,
      location: bookingData.location ?? null,
      notes: bookingData.notes ?? null,
      price: bookingData.price!,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      _version: 1,
      _lastChangedAt: Date.now(),
      _deleted: null,
      serviceBookingsId: bookingData.serviceBookingsId ?? null,
      providerProviderBookingsId: bookingData.providerProviderBookingsId ?? null,
      userBookingsId: bookingData.userBookingsId ?? null,
    };

    const params = {
      TableName: TABLE_NAME,
      Item: booking,
    };

    await dynamoDB.send(new PutCommand(params));
    return booking;
  },

  /**
   * Gets a booking by ID.
   * @param {string} bookingId
   * @returns {Promise<Booking>}
   */
  getBookingById: async (bookingId: string): Promise<Booking> => {
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

  /**
   * Gets all bookings.
   * @returns {Promise<Booking[]>}
   */
  getAllBookings: async (): Promise<Booking[]> => {
    const params = {
      TableName: TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items as Booking[];
  },

  /**
   * Updates a booking by ID.
   * @param {string} bookingId
   * @param {Partial<Booking>} updateData
   * @returns {Promise<Booking>}
   */
  updateBooking: async (bookingId: string, updateData: Partial<Booking>): Promise<Booking> => {
    const fieldsToExclude = ['id', 'createdAt', 'updatedAt']; // Fields that should not be updated

    const filteredUpdateData = Object.entries(updateData)
      .filter(([key]) => !fieldsToExclude.includes(key))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {} as Record<string, any>);

    const updateExpression: string[] = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};

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

    const result = await dynamoDB.send(new UpdateCommand(params as any));
    return result.Attributes as Booking;
  },

  /**
   * Deletes a booking by ID.
   * @param {string} bookingId
   * @returns {Promise<Booking>}
   */
  deleteBooking: async (bookingId: string): Promise<Booking> => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: bookingId,
      },
    };

    const result = await dynamoDB.send(new DeleteCommand(params));
    return result.Attributes as Booking;
  },
};
