const Joi = require('joi');

const bookingSchema = Joi.object({
  bookingId: Joi.string().length(8).required(),
  serviceId: Joi.string().length(8).required(),
  providerId: Joi.string().length(8).required(),
  seekerId: Joi.string().length(8).required(),
  createdDate: Joi.date().iso().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  bookingPrice: Joi.number().positive().required(),
});

module.exports = bookingSchema;
