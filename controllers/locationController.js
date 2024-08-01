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
    }
}

module.exports = LocationController;
