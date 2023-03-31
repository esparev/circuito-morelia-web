const boom = require('@hapi/boom');
const UsersService = require('../services/users.service');
const service = new UsersService();

/**
 * Encuentra todos las usuarios en el array de objetos
 * @returns {Array} - Array con todos las usuarios
 */
const users = (_, { role }) => {
	if (role) {
		return users.filter((user) => user.role === role);
	}
	return service.find();
};

/**
 * Encuentra la usuario con el id proporcionado
 * @param {number} id - id de la usuario
 * @returns {Object} - Objeto con la usuario
 */
const user = (_, { id }) => {
	return service.findOne(id);
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
