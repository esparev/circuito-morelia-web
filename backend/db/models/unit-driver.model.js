const { Model, DataTypes } = require('sequelize');

// Nombre de la tabla de la base de datos
const UNIT_DRIVER_TABLE = 'unit_has_driver';
const { UNIT_TABLE } = require('./unit.model');
const { USER_TABLE } = require('./user.model');

/**
 * @class UnitDriver
 * @description Modelo de la tabla 'unit_has_driver'
 * @extends {Model}
 * @property {number} id - Id de la tabla unit_has_driver
 * @property {string} unitId - Llave foranea de la unidad
 * @property {string} userId - Llave foranea del usuario
 */
const UnitDriverSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	unitId: {
		allowNull: false,
		field: 'unit_id',
		type: DataTypes.INTEGER,
		references: {
			model: UNIT_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	driverId: {
		allowNull: false,
		field: 'driver_id',
		type: DataTypes.INTEGER,
		references: {
			model: USER_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

/**
 * @class UnitDriver
 */
class UnitDriver extends Model {
	/**
	 * @param {*} sequelize - Instancia de Sequelize
	 * @property {any} sequelize - coneccion tipo ORM
	 * @property {string} tableName - Nombre de la tabla
	 * @property {string} modelName - Nombre del modelo
	 * @returns la configuración del modelo
	 */
	static config(sequelize) {
		return {
			sequelize,
			tableName: UNIT_DRIVER_TABLE,
			modelName: 'UnitDriver',
			timestamps: false,
		};
	}
}

module.exports = { UNIT_DRIVER_TABLE, UnitDriverSchema, UnitDriver };
