const Joi = require('@hapi/joi');

const emailSchema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  subject: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  message: Joi.string().min(3).max(200).required(),
});

module.exports = {
  emailSchema,
};
