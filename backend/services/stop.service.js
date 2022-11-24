const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Capa de servicio con métodos CRUD
 */
class StopsService {
	constructor() {}

	/**
	 * Encuentra todos las paradas en el array de objetos
	 * @returns {Array} - Array con todos las paradas
	 */
	async find() {
		const stops = await models.Stop.findAll();
		return stops;
	}

	/**
	 * Encuentra la parada con el id proporcionado
	 * @param {number} id - id de la parada
	 * @returns {Object} - Objeto con la parada
	 */
	async findOne(id) {
		const stop = await models.Stop.findByPk(id);

		if (!stop) {
			throw boom.notFound('parada no encontrada');
		}

		return stop;
	}

	/**
	 * Crea una parada con los datos proporcionados
	 * @param {*} data - datos de la parada
	 * @returns {Object} - Objeto con la parada creado
	 */
	async create(data) {
		const newStop = await models.Stop.create(data);
		return newStop;
	}

	/**
	 * Actualiza parcialmente la parada con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id de la parada
	 * @param {*} changes - datos de la parada
	 * @returns {Object} - Objeto con la parada actualizado
	 * @throws {Error} - Error si no se encuentra la parada
	 */
	async update(id, changes) {
		const stop = await this.findOne(id);
		const response = await stop.update(changes);
		return response;
	}

	/**
	 * Elimina la parada con el id proporcionado
	 * @param {number} id - id de la parada
	 * @returns {Object} - Objeto con la parada eliminado
	 * @throws {Error} - Error si no se encuentra la parada
	 */
	async delete(id) {
		const stop = await this.findOne(id);
		await stop.destroy();
		return { id };
	}
}

module.exports = StopsService;
