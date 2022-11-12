const Joi = require('joi');

const id = Joi.number().integer().min(1);
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const email = Joi.string().email().min(1).max(255);
const password = Joi.string().min(1).max(255);
const image = Joi.string().uri();
const unitId = Joi.number().integer().min(1);

const getDriverSchema = Joi.object({
	id: id.required(),
});

const createDriverSchema = Joi.object({
	name: name.required(),
	slug: slug.required(),
	email: email.required(),
	password: password.required(),
	image,
	unitId: unitId.required(),
});

const updateDriverSchema = Joi.object({
	name,
	slug,
	email,
	password,
	image,
	unitId,
});

module.exports = { getDriverSchema, createDriverSchema, updateDriverSchema };
