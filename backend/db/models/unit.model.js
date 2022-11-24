const { Model, DataTypes, Sequelize } = require('sequelize');

// Nombre de la tabla de la base de datos
const UNIT_TABLE = 'unit';

/**
 * @class Unit
 * @description Modelo de la tabla 'unit'
 * @extends {Model}
 * @property {number} id - Id de la unidad
 * @property {number} number - Numero de la unidad
 * @property {number} distanceInMins - Distancia de la unidad hacia la parada en mins
 * @property {number} distanceInMts - Distancia de la unidad hacia la parada en Mts
 * @property {string} wayDirection - Sentido en el que va la unidad
 * @property {time} departureTime - Hora de salida de la unidad
 * @property {time} arrivalTime - Hora de llegada de la unidad
 */
const UnitSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	number: {
		allowNull: false,
		unique: true,
		type: DataTypes.INTEGER,
	},
	distanceInMins: {
		allowNull: false,
		field: 'distance_in_mins',
		type: DataTypes.INTEGER,
	},
	distanceInMts: {
		allowNull: false,
		field: 'distance_in_kms',
		type: DataTypes.INTEGER,
	},
	wayDirection: {
		allowNull: false,
		field: 'way_direction',
		type: DataTypes.STRING,
	},
	departureTime: {
		allowNull: false,
		field: 'departure_time',
		type: DataTypes.TIME(6),
		defaultValue: Sequelize.NOW,
	},
	arrivalTime: {
		allowNull: false,
		field: 'arrival_time',
		type: DataTypes.TIME(6),
		defaultValue: Sequelize.NOW,
	},
};

/**
 * @class Unit
 */
class Unit extends Model {
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
			tableName: UNIT_TABLE,
			modelName: 'Unit',
			timestamps: false,
		};
	}

	// Relacion muchos a muchos (M-N) entre unidad y usuarios
	// para el caso de que el rol del usuario sea de conductor
	static associate(models) {
		this.belongsToMany(models.User, {
			through: models.UnitDriver,
			foreignKey: 'unitId',
			otherKey: 'userId',
		});
	}
}

module.exports = { UNIT_TABLE, UnitSchema, Unit };
