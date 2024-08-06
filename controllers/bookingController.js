const BookingService = require('../services/bookingService');
const { BookingStatus } = require('../src/API');

const BookingController = {
  createBooking: async (req, res) => {
    try {
      const booking = await BookingService.createBooking(req.body);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBookingById: async (req, res) => {
    try {
      const booking = await BookingService.getBookingById(req.params.bookingId);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBookingStatus: async (req, res) => {
    const { bookingId } = req.params;
    const { status, userId, providerId } = req.body;

    try {
      const newStatus = BookingStatus[status];
      const result = await BookingService.updateBookingStatus(bookingId, newStatus, userId, providerId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllBookingsByProviderId: async (req, res) => {
    const { providerId } = req.params;

    try {
      const result = await BookingService.getAllBookingsByProviderId(providerId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllBookingsByServiceId: async (req, res) => {
    const { serviceId } = req.params;

    try {
      const result = await BookingService.getAllBookingsByServiceId(serviceId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllBookingsByUserId: async (req, res) => {
    const { userId } = req.params;

    try {
      const result = await BookingService.getAllBookingsByUserId(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = BookingController;
