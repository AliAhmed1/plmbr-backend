const ServiceService = require('../services/serviceService');

const ServiceController = {
  createService: async (req, res) => {
    try {
      const service = await ServiceService.createService(req.body);
      res.status(201).json(service);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  getServiceById: async (req, res) => {
    try {
      const service = await ServiceService.getServiceById(req.params.serviceId);
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllServices: async (req, res) => {
    try {
      const services = await ServiceService.getAllServices();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateService: async (req, res) => {
    try {
      const service = await ServiceService.updateService(req.params.serviceId, req.body);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllServicesByProviderId: async (req, res) => {
    const { providerId } = req.params;

    try {
      const result = await ServiceService.getAllServicesByProviderId(providerId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = ServiceController;
