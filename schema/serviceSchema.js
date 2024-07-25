const Joi = require('joi');

const serviceSchema = Joi.object({
  serviceId: Joi.string().alphanum().length(8),  // Generated in code, not required in input
  providerId: Joi.string().alphanum().length(8).required(),
  serviceType: Joi.string().required(),
  description: Joi.string().required(),
  perDayCharges: Joi.number().required(),
  available: Joi.boolean().default(true),  // Default value
  instantBooking: Joi.boolean().default(false),  // Default value
  availableStatus: Joi.string().valid('true', 'false'),  // Derived from available in the code
  createdDate: Joi.date()  // Generated in code, not required in input
});

module.exports = serviceSchema;
