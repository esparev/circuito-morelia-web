const boom = require('@hapi/boom');
const UsersService = require('../services/users.service');
const service = new UsersService();

/**
 * Encuentra todos las usuarios en el array de objetos
 * @returns {Array} - Array con todos las usuarios
 */
const users = async () => {
	const users = await service.find();
	return users;
};

/**
 * Encuentra la usuario con el id proporcionado
 * @param {number} id - id de la usuario
 * @returns {Object} - Objeto con la usuario
 */
const user = async (_, { id }) => {
	const user = await service.findOne(id);

	if (!user) {
		throw boom.notFound('usuario no encontrado');
	}

	return user;
};

const addUser = (_, args) => {};

module.exports = { user, users, addUser };
