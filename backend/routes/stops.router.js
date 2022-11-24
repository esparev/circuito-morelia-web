const express = require('express');
const passport = require('passport');

const StopsService = require('../services/stops.service');

const router = express.Router();
const service = new StopsService();
const validatorHandler = require('../middlewares/validator.handler');
const {
	getStopSchema,
	createStopSchema,
	updateStopSchema,
} = require('../schemas/stop.schema');

/**
 * Ruta principal de paradas
 * @api {get} /stops Listar parada
 * @apiName ListarParadas
 * @apiGroup Paradas
 * @apiSuccess {Object[]} Lista de paradas
 */
router.get('/', async (req, res, next) => {
	try {
		const stops = service.find();
		res.json(stops);
	} catch (error) {
		next(error);
	}
});

/**
 * Ruta de parada por id
 * @api {get} /stops/:id Obtener parada
 * @apiName ObtenerParada
 * @apiGroup Paradas
 * @apiSuccess {Object} Parada obtenida
 */
router.get(
	'/:id',
	validatorHandler(getStopSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const stop = await service.findOne(id);
			res.status(200).json(stop);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de creación de parada
 * @api {post} /stops Crear parada
 * @apiName CrearParada
 * @apiGroup Paradas
 * @apiSuccess {Object} Parada creada
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createStopSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newStop = await service.create(body);
			res.status(201).json({ newStop, message: 'parada creada' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de actualización de parada
 * @api {patch} /stops/:id Actualizar parada
 * @apiName ActualizarParada
 * @apiGroup Paradas
 * @apiSuccess {Object} Parada actualizada
 */
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getStopSchema, 'params'),
	validatorHandler(updateStopSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const updatedStop = await service.update(id, body);
			res.status(200).json({ updatedStop, message: 'parada actualizada' });
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Ruta de eliminación de parada
 * @api {delete} /stops/:id Eliminar parada
 * @apiName EliminarParada
 * @apiGroup Paradas
 * @apiSuccess {Object} Parada eliminada
 */
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const deletedStop = await service.delete(id);
			res.status(200).json({ deletedStop, message: 'unidad eliminada' });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
