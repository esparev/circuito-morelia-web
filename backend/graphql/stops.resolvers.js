const boom = require('@hapi/boom');
const StopsService = require('../services/stops.service');
const service = new StopsService();

/**
 * Encuentra todos las paradas en el array de objetos
 * @returns {Array} - Array con todos las paradas
 */
const stops = () => {
	return service.find();
};

/**
 * Encuentra la parada con el id proporcionado
 * @param {number} id - id de la parada
 * @returns {Object} - Objeto con la parada
 */
const stop = (_, { id }) => {
	return service.findOne(id);
};

const createStop = (_, { dto }) => {
	return service.create(dto);
};

const updateStop = (_, { id, dto }) => {
	return service.update(id, dto);
};

const deleteStop = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { stop, stops, createStop, updateStop, deleteStop };
