const express = require('express');
const LocationController = require('../controllers/locationController');

const router = express.Router();

router.post('/setLocation', LocationController.setLocation);

module.exports = router;
