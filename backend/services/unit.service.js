const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Capa de servicio con métodos CRUD
 */
class UnitsService {
	constructor() {}

	/**
	 * Encuentra todos las unidades en el array de objetos
	 * @returns {Array} - Array con todos las unidades
	 */
	async find() {
		const units = await models.Unit.findAll();
		return units;
	}

	/**
	 * Encuentra la unidad con el id proporcionado
	 * @param {number} id - id de la unidad
	 * @returns {Object} - Objeto con la unidad
	 */
	async findOne(id) {
		const unit = await models.Unit.findByPk(id);

		if (!unit) {
			throw boom.notFound('unidad no encontrada');
		}

		return unit;
	}

	/**
	 * Crea una unidad con los datos proporcionados
	 * @param {*} data - datos de la unidad
	 * @returns {Object} - Objeto con la unidad creado
	 */
	async create(data) {
		const newUnit = await models.Unit.create(data);
		return newUnit;
	}

	/**
	 * Actualiza parcialmente la unidad con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id de la unidad
	 * @param {*} changes - datos de la unidad
	 * @returns {Object} - Objeto con la unidad actualizado
	 * @throws {Error} - Error si no se encuentra la unidad
	 */
	async update(id, changes) {
		const unit = await this.findOne(id);
		const response = await unit.update(changes);
		return response;
	}

	/**
	 * Elimina la unidad con el id proporcionado
	 * @param {number} id - id de la unidad
	 * @returns {Object} - Objeto con la unidad eliminado
	 * @throws {Error} - Error si no se encuentra la unidad
	 */
	async delete(id) {
		const unit = await this.findOne(id);
		await unit.destroy();
		return { id };
	}
}

module.exports = UnitsService;
