const { Model, DataTypes } = require('sequelize');

// Nombre de la tabla de la base de datos
const STOP_TABLE = 'stop';

/**
 * @class Stop
 * @description Modelo de la tabla 'stop'
 * @extends {Model}
 * @property {number} id - Id de la parada
 * @property {number} latitude - Latitud de la parada
 * @property {number} longitude - Longitud de la parada
 * @property {string} wayDirection - Sentido en el que esta la parada
 */
const StopSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	latitude: {
		allowNull: false,
		unique: true,
		type: DataTypes.DECIMAL(10, 8),
	},
	longitude: {
		allowNull: false,
		type: DataTypes.DECIMAL(10, 8),
	},
	wayDirection: {
		allowNull: false,
		field: 'way_direction',
		type: DataTypes.STRING,
	},
};

/**
 * @class Stop
 */
class Stop extends Model {
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
			tableName: STOP_TABLE,
			modelName: 'Stop',
			timestamps: false,
		};
	}
}

module.exports = { STOP_TABLE, StopSchema, Stop };
