const Joi = require('joi');

const id = Joi.number().integer().min(1);
//! const location = Joi.string().min(1).max(255);
//! const wayDirection = Joi.string().min(1).max(255);
//! const distanceInTime = Joi.number().integer().min(1);
//! const distanceInKm = Joi.number().integer().min(1);

const getStopSchema = Joi.object({
	id: id.required(),
});

const createStopSchema = Joi.object({
	id: id.required(),
	location: location.required(),
	wayDirection: wayDirection.required(),
	distanceInTime: distanceInTime.required(),
	distanceInKm: distanceInKm.required(),
});

const updateStopSchema = Joi.object({
	id,
	location,
	wayDirection,
	distanceInTime,
	distanceInKm,
});

module.exports = { getStopSchema, createStopSchema, updateStopSchema };
