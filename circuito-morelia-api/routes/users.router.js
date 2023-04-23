const express = require('express');
const passport = require('passport');
const UsersService = require('../services/users.service');

const router = express.Router();
const service = new UsersService();
const validatorHandler = require('../middlewares/validator.handler');
const {
	getUserSchema,
	createUserSchema,
	updateUserSchema,
} = require('../schemas/user.schema');

/**
 * Ruta principal de usuarios
 * @api {get} /users Listar usuarios
 * @apiName ListarUsuarios
 * @apiGroup Usuarios
 * @apiSuccess {Object[]} Lista de usuarios
 */
router.get('/', async (req, res, next) => {
	const { role } = req.query;
	try {
		const users = await service.find();

		if (role) {
			const filteredUsers = users.filter((user) => user.role === role);
			return res.status(200).json(filteredUsers);
		}

		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
});

/**
 * @api {get} /users/:id Obtener usuario
 * @apiName ObtenerUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Usuario obtenido
 */
// router.get(
// 	'/:id',
// 	validatorHandler(getUserSchema, 'params'),
// 	async (req, res, next) => {
// 		try {
// 			const { id } = req.params;
// 			const user = await service.findOne(id);
// 			res.status(200).json(user);
// 		} catch (error) {
// 			next(error);
// 		}
// 	}
// );

/**
 * @api {get} /users/:slug Obtener usuario
 * @apiName ObtenerUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Usuario obtenido
 */
router.get(
	'/:slug',
	validatorHandler(getUserSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const user = await service.findBySlug(slug);
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de creación de usuario
 * @api {post} /users Crear usuario
 * @apiName CrearUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Usuario creado
 */
router.post(
	'/',
	validatorHandler(createUserSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newUser = await service.createUser(body);
			res.status(201).json({ newUser, message: 'usuario creado' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de creación de administradores
 * @api {post} /users Crear administrador
 * @apiName CrearUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Admin creado
 */
router.post(
	'/admin',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createUserSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newAdmin = await service.createAdmin(body);
			res.status(201).json({ newAdmin, message: 'admin creado' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de actualización de usuario
 * @api {patch} /users/:slug Actualizar usuario
 * @apiName ActualizarUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Usuario actualizado
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getUserSchema, 'params'),
	validatorHandler(updateUserSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const updatedUser = await service.update(slug, body);
			res.status(200).json({ updatedUser, message: 'usuario actualizado' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de eliminación de usuario
 * @api {delete} /users/:slug Eliminar usuario
 * @apiName EliminarUsuario
 * @apiGroup Usuarios
 * @apiSuccess {Object} Usuario eliminado
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const deletedUser = await service.delete(slug);
			res.status(200).json({ deletedUser, message: 'usuario eliminado' });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
