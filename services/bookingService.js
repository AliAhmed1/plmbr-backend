const BookingModel = require('../models/bookingModel');
const ServiceModel = require('../models/serviceModel');
const bookingSchema = require('../schema/bookingSchema');
const UserModel = require('../models/userModel');

const { v4: uuidv4 } = require('uuid');

const BookingService = {
  createBooking: async (booking) => {
    const { seekerId, providerId } = booking;

    const seekerResult = await UserModel.getUserById(seekerId);
    const providerResult = await UserModel.getUserById(providerId);

    const seeker = seekerResult.Item;

    if (!seeker || seeker.userType !== 'seeker') {
      throw new Error('Only seeker can create a booking');
    }
    const provider = providerResult.Item;

    if (!provider || provider.userType !== 'provider') {
      throw new Error('Provider Information is invalid');
    }

    const service = await ServiceModel.getServiceById(booking.serviceId);
    if (!service || !service.Item || !service.Item.available) {
      throw new Error('Service is not available for booking');
    }

    booking.bookingId = `bkg${uuidv4().slice(0, 5)}`;
    booking.providerId = service.Item.providerId;
    booking.createdDate = new Date().toISOString();
    const { error } = bookingSchema.validate(booking);
    if (error) {
      throw new Error(error.details[0].message);
    }
    await BookingModel.createBooking(booking);
    return booking;
  },

  getBookingById: async (bookingId) => {
    const result = await BookingModel.getBookingById(bookingId);
    if (!result.Item) {
      throw new Error('Booking not found');
    }
    return result.Item;
  },
};

module.exports = BookingService;
