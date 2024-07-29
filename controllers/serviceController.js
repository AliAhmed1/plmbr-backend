const ServiceService = require('../services/ServiceService');

const createService = async (req, res) => {
  try {
    const serviceData = req.body;
    const service = await ServiceService.createService(serviceData);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await ServiceService.getServiceById(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await ServiceService.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const service = await ServiceService.updateService(id, updateData);
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await ServiceService.deleteService(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createService,
  getServiceById,
  getAllServices,
  updateService,
  deleteService,
};
