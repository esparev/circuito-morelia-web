const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const unitsRouter = require('./units.router');
const stopsRouter = require('./stops.router');

function routerApi(app) {
	const router = express.Router();

	// Ruta padre
	app.use('/api/v1', router);
	// Rutas hijos
	router.use('/users', usersRouter);
	router.use('/units', unitsRouter);
	router.use('/stops', stopsRouter);
	router.use('/auth', authRouter);
}

module.exports = routerApi;
