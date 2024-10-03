const express = require('express');
const ProviderController = require('../controllers/providerController');

const router = express.Router();

router.post('/providers', ProviderController.createProvider);
router.get('/providers/:providerId', ProviderController.getProviderById);
router.put('/providers/:providerId', ProviderController.updateProvider);
router.delete('/providers/:providerId', ProviderController.deleteProvider);
router.post('/instantProviders', ProviderController.getInstantProviders);
router.post('/getallProviders', ProviderController.getAllProviders);
router.get('/providers', ProviderController.getAllProvidersWithoutFilter);
router.post('/setInstantProvider/:providerId', ProviderController.toggleInstantBooking);
router.get('/provider', ProviderController.getProvider);

module.exports = router;
