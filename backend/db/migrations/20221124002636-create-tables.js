'use strict';

/**
 * Crea las tablas iniciales para evitar la creación de cada tabla
 * cada vez que se conecta a la base de datos via sequelize
 */
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { UnitSchema, UNIT_TABLE } = require('../models/unit.model');
const { StopSchema, STOP_TABLE } = require('../models/stop.model');
const {
	UnitDriverSchema,
	UNIT_DRIVER_TABLE,
} = require('../models/unit-driver.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(USER_TABLE, UserSchema);
		await queryInterface.createTable(UNIT_TABLE, UnitSchema);
		await queryInterface.createTable(STOP_TABLE, StopSchema);
		await queryInterface.createTable(UNIT_DRIVER_TABLE, UnitDriverSchema);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(USER_TABLE);
		await queryInterface.dropTable(UNIT_TABLE);
		await queryInterface.dropTable(STOP_TABLE);
		await queryInterface.dropTable(UNIT_DRIVER_TABLE);
	},
};
