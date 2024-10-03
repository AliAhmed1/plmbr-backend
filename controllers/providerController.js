const ProviderService = require('../services/providerService');

const ProviderController = {
  getProvider : async (req, res) => {
    try {
      const { id, email } = req.query;
      // Check if the query contains 'id' or 'email'
      let provider;
      if (id) {
        provider = await ProviderService.getProviderById(id); // Get provider by ID
      } else if (email) {
        provider = await ProviderService.getProviderByEmail(email); // Get provider by email
      } else {
        return res.status(400).json({ message: 'Please provide an id or email.' });
      }
      if (!provider) {
        return res.status(404).json({ message: 'Provider not found.' });
      }
      return res.status(200).json(provider);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createProvider: async (req, res) => {
    try {
      const provider = await ProviderService.createProvider(req.body);
      res.status(201).json(provider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProviderById: async (req, res) => {
    try {
      const provider = await ProviderService.getProviderById(req.params.providerId);
      if (!provider) {
        return res.status(404).json({ error: 'Provider not found' });
      }
      res.status(200).json(provider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllProvidersWithoutFilter: async (req, res) => {
    try {
      const providers = await ProviderService.getAllProviders();
      res.status(200).json(providers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProvider: async (req, res) => {
    try {
      const provider = await ProviderService.updateProvider(req.params.providerId, req.body);
      res.status(200).json(provider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteProvider: async (req, res) => {
    try {
      const provider = await ProviderService.deleteProvider(req.params.providerId);
      res.status(200).json(provider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getInstantProviders: async (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
      const providers = await ProviderService.getProvidersWithinRange(
        Number(latitude),
        Number(longitude),
        30,
        true
      );
      res.status(200).json(providers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllProviders: async (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
      const providers = await ProviderService.getProvidersWithinRange(
        Number(latitude),
        Number(longitude),
        150,
        false
      );
      res.status(200).json(providers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  toggleInstantBooking: async (req, res) => {
    const { providerId } = req.params;
    const { isInstantBookingAvailable } = req.body;

    try {
      const result = await ProviderService.toggleInstantBooking(providerId, isInstantBookingAvailable);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

};

module.exports = ProviderController;
