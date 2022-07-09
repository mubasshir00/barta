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

const loginSchema = Joi.object({
    emailOrPhone: Joi.string(),
    userName:Joi.string(),
    password:Joi.string().required(),
})

module.exports = {
    registrationSchema:registrationSchema,
    loginSchema:loginSchema
}