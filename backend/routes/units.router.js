const express = require('express');
const passport = require('passport');

const UnitsService = require('../services/units.service');

const router = express.Router();
const service = new UnitsService();
const validatorHandler = require('../middlewares/validator.handler');
const {
	getUnitSchema,
	createUnitSchema,
	updateUnitSchema,
	addDriverSchema,
} = require('../schemas/unit.schema');

/**
 * Ruta principal de unidades
 * @api {get} /units Listar unidades
 * @apiName ListarUnidades
 * @apiGroup Unidades
 * @apiSuccess {Object[]} Lista de unidades
 */
router.get('/', async (req, res, next) => {
	try {
		const units = await service.find();
		res.status(200).json(units);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de unidad por id
 * @api {get} /units/:id Obtener unidad
 * @apiName ObtenerUnidad
 * @apiGroup Unidades
 * @apiSuccess {Object} Unidad obtenida
 */
router.get(
	'/:id',
	validatorHandler(getUnitSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const unit = await service.findOne(id);
			res.status(200).json(unit);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de creación de unidad
 * @api {post} /units Crear unidad
 * @apiName CrearUnidad
 * @apiGroup Unidades
 * @apiSuccess {Object} Unidad creada
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createUnitSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newUnit = await service.create(body);
			res.status(201).json({ newUnit, message: 'unidad creada' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de asignar conductor a unidad
 * @api {post} /units Asignar conductor
 * @apiName AsignarConductor
 * @apiGroup Unidades
 * @apiSuccess {Object} Conductor asignado
 */
router.post(
	'/add-driver',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(addDriverSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newDriver = await service.addDriver(body);
			res.status(201).json({ newDriver, message: 'conductor asignado' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de actualización de unidad
 * @api {patch} /units/:id Actualizar unidad
 * @apiName ActualizarUnidad
 * @apiGroup Unidades
 * @apiSuccess {Object} Unidad actualizada
 */
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getUnitSchema, 'params'),
	validatorHandler(updateUnitSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const updatedUnit = await service.update(id, body);
			res.status(200).json({ updatedUnit, message: 'unidad actualizada' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de eliminación de unidad
 * @api {delete} /units/:id Eliminar unidad
 * @apiName EliminarUnidad
 * @apiGroup Unidades
 * @apiSuccess {Object} Unidad eliminada
 */
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const deletedUnit = await service.delete(id);
			res.status(200).json({ deletedUnit, message: 'unidad eliminada' });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
