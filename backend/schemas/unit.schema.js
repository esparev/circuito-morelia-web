const Joi = require('joi');

const id = Joi.number().integer().min(1);
const number = Joi.number().integer().min(1).max(1000);
//! const wayDirection = Joi.string().min(1).max(255);
//! const distanceInTime = Joi.number().integer().min(1);
//! const distanceInKm = Joi.number().integer().min(1);

const getUnitSchema = Joi.object({
	id: id.required(),
});

const createUnitSchema = Joi.object({
	id: id.required(),
	number: number.required(),
	wayDirection: wayDirection.required(),
	distanceInTime: distanceInTime.required(),
	distanceInKm: distanceInKm.required(),
});

const updateUnitSchema = Joi.object({
	id,
	number,
	wayDirection,
	distanceInTime,
	distanceInKm,
});

module.exports = { getUnitSchema, createUnitSchema, updateUnitSchema };
