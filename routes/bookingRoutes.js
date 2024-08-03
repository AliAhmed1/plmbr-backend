const express = require('express');
const BookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookings', BookingController.createBooking);
router.get('/bookings/:bookingId', BookingController.getBookingById);
router.post('/bookings/:bookingId/status', BookingController.updateBookingStatus);

module.exports = router;
