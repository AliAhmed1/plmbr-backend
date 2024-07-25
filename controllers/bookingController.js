const BookingService = require('../services/bookingService');
const { handleError } = require('../utils/errorHandler');

const BookingController = {
  createBooking: async (req, res) => {
    try {
      const booking = await BookingService.createBooking(req.body, req.userType);
      res.status(201).json(booking);
    } catch (error) {
      handleError(res, error);
    }
  },

  getBookingById: async (req, res) => {
    try {
      const booking = await BookingService.getBookingById(req.params.bookingId);
      res.status(200).json(booking);
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = BookingController;
