const { PutCommand, GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');

const TABLE_NAME = 'Bookings';

const BookingModel = {
  createBooking: async (booking) => {
    const params = {
      TableName: TABLE_NAME,
      Item: booking,
    };
    return dynamoDB.send(new PutCommand(params));
  },

  getBookingById: async (bookingId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { bookingId },
    };
    return dynamoDB.send(new GetCommand(params));
  },
};

module.exports = BookingModel;
