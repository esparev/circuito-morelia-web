const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Capa de servicio con métodos CRUD
 */
class UsersService {
	constructor() {}

	/**
	 * Encuentra todos los usuarios en el array de objetos
	 * @returns {Array} - Array con todos los usuarios
	 */
	async find() {
		const users = await models.User.findAll();
		return users;
	}

	/**
	 * Encuentra el usuario con el email proporcionado
	 * @param {string} email - email del usuario
	 * @returns {Object} - Objeto con el usuario encontrado
	 */
	async findByEmail(email) {
		const user = await models.User.findOne({
			where: { email },
		});

		if (!user) {
			throw boom.notFound('usuario no encontrado');
		}

		return user;
	}

	/**
	 * Encuentra el usuario con el id proporcionado
	 * @param {number} id - id del usuario
	 * @returns {Object} - Objeto con el usuario
	 */
	async findOne(id) {
		const user = await models.User.findByPk(id);

		if (!user) {
			throw boom.notFound('usuario no encontrado');
		}
		return user;
	}

	/**
	 * Crea un usuario con los datos proporcionados
	 * y encripta la contraseña con el metodo hash
	 * @param {*} data - datos del usuario
	 * @returns {Object} - Objeto con el usuario creado
	 */
	async createUser(data) {
		const hash = await bcrypt.hash(data.password, 13);

		const newUser = await models.User.create({
			...data,
			password: hash,
		});

		delete newUser.dataValues.password;
		delete newUser.dataValues.recoveryToken;

		return newUser;
	}

	/**
	 * Crea un administrador con los datos proporcionados
	 * y encripta la contraseña con el metodo hash
	 * @param {*} data - datos del admin
	 * @returns {Object} - Objeto con el admin creado
	 */
	async createAdmin(data) {
		const hash = await bcrypt.hash(data.password, 13);

		if (data.role === 'driver' || data.role === 'client') {
			throw boom.unauthorized('No esta permitido esta accion');
		}

		const newAdmin = await models.User.create({
			...data,
			password: hash,
		});

		delete newAdmin.dataValues.password;

		return newAdmin;
	}

	/**
	 * Actualiza parcialmente el usuario con el id proporcionado
	 * con los datos proporcionados
	 * @param {number} id - id del usuario
	 * @param {*} changes - datos del usuario
	 * @returns {Object} - Objeto con el usuario actualizado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async update(id, changes) {
		const user = await this.findOne(id);
		const response = await user.update(changes);
		return response;
	}

	/**
	 * Elimina el usuario con el id proporcionado
	 * @param {number} id - id del usuario
	 * @returns {Object} - Objeto con el usuario eliminado
	 * @throws {Error} - Error si no se encuentra el usuario
	 */
	async delete(id) {
		const user = await this.findOne(id);
		await user.destroy();
		return { id };
	}
}

module.exports = UsersService;
