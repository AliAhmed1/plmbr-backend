const Joi = require('joi');

const userSchema = Joi.object({
  userId: Joi.string().alphanum().length(8),  // Generated in code, not required in input
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userType: Joi.string().valid('provider', 'seeker', 'admin').required(),
  createdDate: Joi.date(),  // Generated in code, not required in input
  latitude: Joi.number().min(-90).max(90).allow(null),  // Latitude must be between -90 and 90 or null
  longitude: Joi.number().min(-180).max(180).allow(null)  // Longitude must be between -180 and 180 or null
});

module.exports = userSchema;
