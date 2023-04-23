const { Model, DataTypes } = require('sequelize');
const boom = require('@hapi/boom');

// Nombre de la tabla de la base de datos
const USER_TABLE = 'user';

/**
 * @class User
 * @description Modelo de la tabla 'user'
 * @extends {Model}
 * @property {number} id - Id del usuario
 * @property {string} name - Nombre del usuario
 * @property {string} slug - Slug del usuario
 * @property {string} email - Email del usuario
 * @property {string} password - Contraseña del usuario
 * @property {string} role - Rol del usuario
 * @property {string} image - Imagen del usuario
 */
const UserSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	slug: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING,
		validate: {
			isEmail: true,
		},
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	role: {
		allowNull: false,
		type: DataTypes.STRING,
		defaultValue: 'user',
		validate: {
			isHero(value) {
				if (value === 'hero') {
					throw boom.forbidden('No esta permitido esta accion');
				}
			},
		},
	},
	image: {
		allowNull: true,
		type: DataTypes.STRING,
	},
	recoveryToken: {
		allowNull: true,
		field: 'recovery_token',
		type: DataTypes.STRING,
	},
};

/**
 * @class User
 */
class User extends Model {
	// Relacion muchos a muchos (M-N) entre unidad y usuarios
	// para el caso de que el rol del usuario sea de conductor
	static associate(models) {
		this.belongsToMany(models.Unit, {
			as: 'unit',
			through: models.UnitDriver,
			foreignKey: 'driverId',
			otherKey: 'unitId',
		});
	}

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
			tableName: USER_TABLE,
			modelName: 'User',
			timestamps: false,
		};
	}
}

module.exports = { USER_TABLE, UserSchema, User };
