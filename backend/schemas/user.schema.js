const Joi = require('joi');

const id = Joi.number().integer().min(1);
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const email = Joi.string().email().min(1).max(255);
const password = Joi.string().min(1).max(255);
const role = Joi.string().min(1).max(255);
const image = Joi.string().uri();

const getUserSchema = Joi.object({
	id: id.required(),
});

const createUserSchema = Joi.object({
	name: name.required(),
	slug: slug.required(),
	email: email.required(),
	password: password.required(),
	role: role.required(),
	image,
});

const updateUserSchema = Joi.object({
	name,
	slug,
	email,
	password,
	role,
	image,
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
