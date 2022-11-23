const Joi = require('joi');

const id = Joi.number().integer().min(1);
const number = Joi.number().integer().min(1).max(1000);
const wayDirection = Joi.string().min(1).max(255);
const distanceInMins = Joi.number().integer().min(1);
const distanceInKms = Joi.number().integer().min(1);

const getUnitSchema = Joi.object({
	id: id.required(),
});

const createUnitSchema = Joi.object({
	id: id.required(),
	number: number.required(),
	wayDirection: wayDirection.required(),
	distanceInMins: distanceInMins.required(),
	distanceInKms: distanceInKms.required(),
});

const updateUnitSchema = Joi.object({
	id,
	number,
	wayDirection,
	distanceInMins,
	distanceInKms,
});

module.exports = { getUnitSchema, createUnitSchema, updateUnitSchema };
