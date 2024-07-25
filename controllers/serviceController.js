const ServiceService = require('../services/serviceService');
const { handleError } = require('../utils/errorHandler');

const ServiceController = {
  createService: async (req, res) => {
    try {
      const service = await ServiceService.createService(req.body);
      res.status(201).json(service);
    } catch (error) {
      handleError(res, error);
    }
  },

  getServiceById: async (req, res) => {
    try {
      const service = await ServiceService.getServiceById(req.params.serviceId);
      res.status(200).json(service);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  getAvailableServices: async (req, res) => {
    try {
      const services = await ServiceService.getAvailableServices();
      res.status(200).json(services);
    } catch (error) {
      handleError(res, error);
    }
  },

  toggleInstantBooking: async (req, res) => {
    try {
      const { serviceId } = req.params;
      const { instantBooking } = req.body;
      const updatedService = await ServiceService.toggleInstantBooking(serviceId, instantBooking);
      res.status(200).json(updatedService);
    } catch (error) {
      handleError(res, error);
    }
  },

  toggleAvailable: async (req, res) => {
    try {
      const { serviceId } = req.params;
      const { available } = req.body;
      const updatedService = await ServiceService.toggleAvailable(serviceId, available);
      res.status(200).json(updatedService);
    } catch (error) {
      handleError(res, error);
    }
  },

  getInstantBookings: async (req, res) => {
    try {
      const { seekerId } = req.query;
      if (!seekerId) {
        return res.status(400).json({ error: 'Seeker ID is required' });
      }

      console.log('Calling getInstantBookings with seekerId:', seekerId);
      const services = await ServiceService.getInstantBookings(seekerId);
      res.status(200).json(services);
    } catch (error) {
      console.error('Error in getInstantBookings controller:', error);
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = ServiceController;
