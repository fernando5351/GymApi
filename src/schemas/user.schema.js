const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().required();
const email = Joi.string().email().required();
const password = Joi.string().required();
const verificated = Joi.boolean().default(false);
const status = Joi.boolean().default(true);
const role = Joi.string().required();

const createUser = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUser = Joi.object({
  name,
  email,
  password,
  verificated,
  status,
  role,
});

const getUser = Joi.object({
  id: id.required(),
});

module.exports = {
  createUser,
  updateUser,
  getUser,
};
