const boom = require('@hapi/boom');
const UsersService = require('../services/users.service');
const service = new UsersService();

/**
 * Encuentra todos las usuarios en el array de objetos
 * @returns {Array} - Array con todos las usuarios
 */
const users = async (_, { role }) => {
	const users = await service.find();

	if (role) {
		const filteredUsers = users.filter((user) => user.role === role);
		return filteredUsers;
	}

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

const createUser = (_, { dto }) => {
	return service.create(dto);
};

const updateUser = (_, { id, dto }) => {
	return service.update(id, dto);
};

const deleteUser = async (_, { id }) => {
	await service.delete(id);
	return id;
};

module.exports = { user, users, createUser, updateUser, deleteUser };
