const express = require('express');
const ProviderScheduleController = require('../controllers/providerScheduleController');

const router = express.Router();

router.get('/providers/:providerId/schedules', ProviderScheduleController.getAllSchedulesByProviderId);

module.exports = router;
