const express = require('express');
const ServiceController = require('../controllers/serviceController');

const router = express.Router();

// Provider routes
router.post('/services', ServiceController.createService);
router.put('/services/:serviceId', ServiceController.updateService);

// User routes
router.get('/services/:serviceId', ServiceController.getServiceById);
router.get('/services', ServiceController.getAllServices);

module.exports = router;
