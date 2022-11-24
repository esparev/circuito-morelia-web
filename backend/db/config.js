// Archivo de configuración para los archivos de sistema de migración
const { config } = require('../config/config');

module.exports = {
	development: {
		url: config.dbUrl,
		dialect: 'postgres',
	},
	production: {
		dialect: 'postgres',
		url: config.databaseUrl,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	},
};
