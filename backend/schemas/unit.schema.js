const Joi = require('joi');

const id = Joi.number().integer().min(1);
const number = Joi.number().integer().min(1).max(1000);
const wayDirection = Joi.string().min(1).max(255);
const distanceInMins = Joi.number().integer().min(1);
const distanceInMts = Joi.number().integer().min(1);
const departureTime = Joi.date().timestamp();
const arrivalTime = Joi.date().timestamp();
const driverId = Joi.number().integer().min(1);

const getUnitSchema = Joi.object({
	number: number.required(),
});

const createUnitSchema = Joi.object({
	number: number.required(),
	wayDirection,
	distanceInMins,
	distanceInMts,
	departureTime,
	arrivalTime,
});

const updateUnitSchema = Joi.object({
	number,
	wayDirection,
	distanceInMins,
	distanceInMts,
	departureTime,
	arrivalTime,
});

const addDriverSchema = Joi.object({
	unitId: id.required(),
	driverId: driverId.required(),
});

module.exports = {
	getUnitSchema,
	createUnitSchema,
	updateUnitSchema,
	addDriverSchema,
};
