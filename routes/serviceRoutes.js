const express = require('express');
const ServiceController = require('../controllers/serviceController');

const router = express.Router();

router.post('/services', ServiceController.createService);
router.get('/services/:serviceId', ServiceController.getServiceById);
router.get('/services', ServiceController.getAvailableServices);
router.put('/services/:serviceId/instantBooking', ServiceController.toggleInstantBooking);
router.put('/services/:serviceId/available', ServiceController.toggleAvailable);
router.get('/instantBookings', ServiceController.getInstantBookings);

module.exports = router;
