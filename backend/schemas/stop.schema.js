const Joi = require('joi');

const id = Joi.number().integer().min(1);
const latitude = Joi.number().precision(8);
const longitude = Joi.number().precision(8);
const wayDirection = Joi.string().min(1).max(255);

const getStopSchema = Joi.object({
	id: id.required(),
});

const createStopSchema = Joi.object({
	id: id.required(),
	latitude: latitude.required(),
	longitude: longitude.required(),
	wayDirection: wayDirection.required(),
});

const updateStopSchema = Joi.object({
	id,
	latitude,
	longitude,
	wayDirection,
});

module.exports = { getStopSchema, createStopSchema, updateStopSchema };
