const boom = require('@hapi/boom');

/**
 * Valida los datos de entrada de una petición
 * que se realiza a través de una ruta coinciden
 * con el esquema de validación definido.
 * @param {*} schema - Joi schema
 * @param {*} property - property name (params, query, body)
 * @returns {function} - middleware
 */
function validatorHandler(schema, property) {
	return (req, res, next) => {
		const data = req[property];
		const { error } = schema.validate(data, { abortEarly: false });

		if (error) {
			return next(boom.badRequest(error));
		}

		next();
	};
}

module.exports = validatorHandler;
