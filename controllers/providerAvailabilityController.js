const ProviderAvailabilityService = require('../services/providerAvailabilityService');

const ProviderAvailabilityController = {
    getAllAvailabilityByProviderId: async (req, res) => {
    const { providerId } = req.params;

    try {
      const schedules = await ProviderAvailabilityService.getAllAvailabilityByProviderId(providerId);
      res.status(200).json(schedules);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = ProviderAvailabilityController;
