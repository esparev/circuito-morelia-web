const boom = require('@hapi/boom');
const StopsService = require('../services/stops.service');
const service = new StopsService();

/**
 * Encuentra todos las paradas en el array de objetos
 * @returns {Array} - Array con todos las paradas
 */
const stops = async () => {
	const stops = await service.find();
	return stops;
};

/**
 * Encuentra la parada con el id proporcionado
 * @param {number} id - id de la parada
 * @returns {Object} - Objeto con la parada
 */
const stop = async (_, { id }) => {
	const stop = await service.findOne(id);

	if (!stop) {
		throw boom.notFound('parada no encontrada');
	}

	return stop;
};

const addStop = (_, args) => {};

module.exports = { stop, stops, addStop };
