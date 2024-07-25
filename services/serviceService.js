const ServiceModel = require('../models/serviceModel');
const UserModel = require('../models/userModel');
const serviceSchema = require('../schema/serviceSchema');
const haversineDistance = require('../utils/distance');

const { v4: uuidv4 } = require('uuid');

const ServiceService = {
  createService: async (serviceData) => {
    const { providerId } = serviceData;

    // Fetch user information
    const userResult = await UserModel.getUserById(providerId);
    const user = userResult.Item

    // Check if the user is a provider
    if (!user || user.userType !== 'provider') {
      throw new Error('Only providers can create a service');
    }

    // Generate serviceId and createdDate
    const service = {
      ...serviceData,
      serviceId: `svc${uuidv4().slice(0, 5)}`,
      createdDate: new Date().toISOString(),
      availableStatus: 'true',
      instantBooking: false,  // Default value
      available: true  // Default value
    };

    // Validate the service data
    const { error } = serviceSchema.validate(service);
    if (error) {
      throw new Error(error.details[0].message);
    }

    // Save the service to the database
    await ServiceModel.createService(service);
    return service;
  },

  getServiceById: async (serviceId) => {
    const result = await ServiceModel.getServiceById(serviceId);
    if (!result.Item) {
      throw new Error('Service not found');
    }
    return result.Item;
  },

  getAvailableServices: async () => {
    const result = await ServiceModel.getAvailableServices();
    return result.Items;
  },

  toggleInstantBooking: async (serviceId, instantBooking) => {
    const result = await ServiceModel.toggleInstantBooking(serviceId, instantBooking);
    if (!result.Attributes) {
      throw new Error('Service not found');
    }
    return result.Attributes;
  },

  toggleAvailable: async (serviceId, available) => {
    const result = await ServiceModel.toggleAvailable(serviceId, available);
    if (!result.Attributes) {
      throw new Error('Service not found');
    }
    return result.Attributes;
  },

  getInstantBookings: async (seekerId) => {
    try {
      console.log('Fetching services for instant booking...');
      const servicesResult = await ServiceModel.getServicesForInstantBooking();
      const services = servicesResult.Items;

      if (!services || services.length === 0) {
        console.log('No services found with instantBooking and available set to true.');
        return [];
      }

      console.log('Fetching seeker details for seekerId:', seekerId);
      const seekerResult = await UserModel.getUserById(seekerId);
      const seeker = seekerResult.Item;
      if (!seeker) {
        throw new Error('Invalid seeker ID');
      }

      console.log('Seeker details:', seeker);

      // Filter services based on distance
      const filteredServices = [];
      for (const service of services) {
        console.log('Fetching provider details for providerId:', service.providerId);
        const providerResult = await UserModel.getUserById(service.providerId);
        const provider = providerResult.Item;
        if (!provider) {
          console.log(`Provider with ID ${service.providerId} not found.`);
          continue;
        }

        console.log('Provider details:', provider);

        const distance = haversineDistance(
          { latitude: seeker.latitude || 0, longitude: seeker.longitude || 0 },
          { latitude: provider.latitude || 0, longitude: provider.longitude || 0 }
        );

        console.log(`Distance between seeker and provider: ${distance} miles`);

        if (distance <= 30) {
          filteredServices.push(service);
        }
      }

      console.log('Filtered services:', filteredServices);
      return filteredServices;
    } catch (error) {
      console.error('Error in getInstantBookings:', error);
      throw error;
    }
  },

};

module.exports = ServiceService;
