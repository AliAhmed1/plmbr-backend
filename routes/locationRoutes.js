const express = require('express');
const setLocationController = require('../controllers/locationController');

const router = express.Router();

router.post('/setLocation', setLocationController);

module.exports = router;
