const ProviderScheduleService = require('../services/providerScheduleService');

const ProviderScheduleController = {
  getAllSchedulesByProviderId: async (req, res) => {
    const { providerId } = req.params;

    try {
      const schedules = await ProviderScheduleService.getAllSchedulesByProviderId(providerId);
      res.status(200).json(schedules);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = ProviderScheduleController;
