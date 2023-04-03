const boom = require('@hapi/boom');
const UnitsService = require('../services/units.service');
const service = new UnitsService();

/**
 * Encuentra todos las unidades en el array de objetos
 * @returns {Array} Array con todos las unidades
 */
const units = () => {
	return service.find();
};

/**
 * Encuentra la unidad con el numero proporcionado
 * @param {number} numero - numero de la unidad
 * @returns {Object} Objeto con la unidad
 */
const unit = (_, { number }) => {
	return service.findByNumber(number);
};

/**
 * Crea una nueva unidad
 * @param {Object} dto - Objeto con los datos de la unidad
 * @returns {Object} Objeto con la unidad
 */
const createUnit = async (_, { dto }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	return service.create(dto);
};

/**
 * Actualiza la unidad con el id proporcionado
 * @param {number} id - id de la unidad
 * @param {Object} dto - Objeto con los datos de la unidad
 * @returns {Object} Objeto con la unidad
 */
const updateUnit = async (_, { id, dto }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	return service.update(id, dto);
};

/**
 * Elimina la unidad con el id proporcionado
 * @param {number} id - id de la unidad
 * @returns {number} id de la unidad eliminada
 */
const deleteUnit = async (_, { id }, context) => {
	const { user } = await context.authenticate('jwt', { session: false });

	if (!user) {
		throw boom.unauthorized('No autorizado');
	}

	await service.delete(id);
	return id;
};

module.exports = { unit, units, createUnit, updateUnit, deleteUnit };
