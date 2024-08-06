const express = require('express');
const ProviderAvailabilityController = require('../controllers/providerAvailabilityController');

const router = express.Router();

router.get('/providers/:providerId/availabilities', ProviderAvailabilityController.getAllAvailabilityByProviderId);

module.exports = router;
