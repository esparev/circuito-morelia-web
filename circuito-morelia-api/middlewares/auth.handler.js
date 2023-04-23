const boom = require('@hapi/boom');
const { config } = require('../config/config');

/**
 * Revisa y verifica si la apiKey es valida
 * @param {*} req - request object
 * @param {*} res- response object
 * @param {*} next - next middleware
 */
function checkApiKey(req, res, next) {
	const apiKey = req.headers['api'];
	if (apiKey === config.apiKey) {
		next();
	} else {
		next(boom.unauthorized());
	}
}

module.exports = { checkApiKey };
