const Joi = require('joi');

const id = Joi.number().integer().min(1);
const wayDirection = Joi.string().min(1).max(255);
const distanceInMins = Joi.number().integer().min(1);
const distanceInKms = Joi.number().integer().min(1);

const getStopSchema = Joi.object({
	id: id.required(),
});

const createStopSchema = Joi.object({
	id: id.required(),
	location: location.required(),
	wayDirection: wayDirection.required(),
	distanceInMins: distanceInMins.required(),
	distanceInKms: distanceInKms.required(),
});

const updateStopSchema = Joi.object({
	id,
	location,
	wayDirection,
	distanceInMins,
	distanceInKms,
});

module.exports = { getStopSchema, createStopSchema, updateStopSchema };
