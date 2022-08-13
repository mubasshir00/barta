const Joi = require("joi");

const registerSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(6).max(12).required()
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

module.exports = {
  registerSchema: registerSchema,
  loginSchema: loginSchema,
};