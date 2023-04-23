const { config } = require('../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

const options = {
	dialect: 'postgres',
	logging: config.isProd ? false : console.log,
};

if (config.isProd) {
	options.dialectOptions = {
		ssl: {
			rejectUnauthorized: false,
		},
	};
}

const sequelize = new Sequelize(
	config.isProd ? config.databaseUrl : config.dbUrl,
	options
);

setupModels(sequelize);

module.exports = sequelize;
