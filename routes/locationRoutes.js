const express = require('express');
const LocationController = require('../controllers/locationController');

const router = express.Router();

router.post('/setLocation', LocationController.setLocation);
router.get('/locations/:locationId', LocationController.getLocationById);
router.post('/locations/locationids', LocationController.getLocationsByLocationIds);

module.exports = router;
