const LocationService = require('../services/locationService');

const LocationController = {

  setLocation: async (req, res) => {
    const { userId, providerId, locationData } = req.body;

    try {
      const result = await LocationService.setLocation(userId, providerId, locationData);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getLocationById: async (req, res) => {
    const { locationId } = req.params;

    try {
      const result = await LocationService.getLocationById(locationId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getLocationsByLocationIds: async (req, res) => {
    const { locationIds } = req.body;

    if (!Array.isArray(locationIds) || locationIds.length === 0) {
      return res.status(400).json({ message: 'locationIds must be a non-empty array' });
    }

    try {
      const locations = await LocationService.getLocationsByLocationIds(locationIds);
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
}

module.exports = LocationController;
