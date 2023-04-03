const boom = require('@hapi/boom');
const StopsService = require('../services/stops.service');
const service = new StopsService();

/**
 * Encuentra todos las paradas en el array de objetos
 * @returns {Array} Array con todos las paradas
 */
const stops = () => {
	return service.find();
};

/**
 * Encuentra la parada con el id proporcionado
 * @param {number} id - id de la parada
 * @returns {Object} Objeto con la parada
 */
const stop = (_, { id }) => {
	return service.findOne(id);
};

/**
 * Crea una nueva parada
 * @param {Object} dto - Objeto con los datos de la parada
 * @returns {Object} Objeto con la parada
 */
const createStop = async (_, { dto }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	return service.create(dto);
};

/**
 * Actualiza la parada con el id proporcionado
 * @param {number} id - id de la parada
 * @param {Object} dto - Objeto con los datos de la parada
 * @returns {Object} Objeto con la parada
 */
const updateStop = async (_, { id, dto }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	return service.update(id, dto);
};

/**
 * Elimina la parada con el id proporcionado
 * @param {number} id - id de la parada
 * @returns {number} id de la parada eliminada
 */
const deleteStop = async (_, { id }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	await service.delete(id);
	return id;
};

module.exports = { stop, stops, createStop, updateStop, deleteStop };
