const boom = require('@hapi/boom');
const UnitsService = require('../services/units.service');
const service = new UnitsService();

/**
 * Encuentra todos las unidades en el array de objetos
 * @returns {Array} - Array con todos las unidades
 */
const units = async () => {
	const units = await service.find();
	return units;
};

/**
 * Encuentra la unidad con el id proporcionado
 * @param {number} id - id de la unidad
 * @returns {Object} - Objeto con la unidad
 */
const unit = async (_, { id }) => {
	const unit = await service.findOne(id);

	if (!unit) {
		throw boom.notFound('unidad no encontrada');
	}

	return unit;
};

const createUnit = (_, { dto }) => {
	return service.create(dto);
};

const updateUnit = (_, { id, dto }) => {
	return service.update(id, dto);
};

const deleteUnit = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { unit, units, createUnit, updateUnit, deleteUnit };
