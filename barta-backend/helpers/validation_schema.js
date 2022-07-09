const Joi = require("joi");

const registrationSchema = Joi.object({
  name: Joi.string().required(),
  emailOrPhone: Joi.string().required(),
  password: Joi.string().required(),
  userName: Joi.string().required(),
  profilePic: Joi.string(),
  address: Joi.string(),
  apartment: Joi.string(),
  zip: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
});

module.exports = {
    registrationSchema:registrationSchema
}