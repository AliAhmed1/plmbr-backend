const ProviderService = require('../services/providerService');

const ProviderController = {
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

  getAllProviders: async (req, res) => {
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
};

module.exports = ProviderController;
