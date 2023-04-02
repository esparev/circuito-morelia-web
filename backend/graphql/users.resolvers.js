const boom = require('@hapi/boom');
const UsersService = require('../services/users.service');
const service = new UsersService();

/**
 * Encuentra todos las usuarios en el array de objetos
 * @returns {Array} Array con todos las usuarios
 */
const users = async (_, { role }) => {
	const users = await service.findBySlug();

	if (role) {
		return users.filter((user) => user.role === role);
	}
	return users;
};

/**
 * Encuentra la usuario con el id proporcionado
 * @param {number} id - id de la usuario
 * @returns {Object} Objeto con la usuario
 */
const user = (_, { slug }) => {
	return service.findBySlug(slug);
};

/**
 * Crea un nuevo usuario
 * @param {Object} dto - Objeto con los datos de el usuario
 * @returns {Object} Objeto con el usuario
 */
const createUser = (_, { dto }) => {
	return service.create(dto);
};

/**
 * Actualiza el usuario con el id proporcionado
 * @param {number} id - id de el usuario
 * @param {Object} dto - Objeto con los datos de el usuario
 * @returns {Object} Objeto con el usuario
 */
const updateUser = (_, { id, dto }) => {
	return service.update(id, dto);
};

/**
 * Elimina el usuario con el id proporcionado
 * @param {number} id - id de el usuario
 * @returns {number} id de el usuario eliminado
 */
const deleteUser = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { user, users, createUser, updateUser, deleteUser };
