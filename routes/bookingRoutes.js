const express = require('express');
const BookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookings', BookingController.createBooking);
router.get('/bookings/:bookingId', BookingController.getBookingById);
router.post('/bookings/:bookingId/status', BookingController.updateBookingStatus);
router.get('/bookings/:providerId/provider', BookingController.getAllBookingsByProviderId);
router.get('/bookings/:serviceId/service', BookingController.getAllBookingsByServiceId);
router.get('/bookings/:userId/user', BookingController.getAllBookingsByUserId);

module.exports = router;
