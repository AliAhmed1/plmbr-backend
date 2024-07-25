const express = require('express');
const ProviderController = require('../controllers/providerController');

const router = express.Router();

router.post('/providers', ProviderController.createProvider);
router.get('/providers/:providerId', ProviderController.getProviderById);
router.put('/providers/:providerId', ProviderController.updateProvider);
router.delete('/providers/:providerId', ProviderController.deleteProvider);

module.exports = router;
