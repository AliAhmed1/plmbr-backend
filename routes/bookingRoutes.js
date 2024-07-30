const express = require('express');
const BookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookings', BookingController.createBooking);
router.get('/bookings/:bookingId', BookingController.getBookingById);

module.exports = router;
