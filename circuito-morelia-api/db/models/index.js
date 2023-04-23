const { Stop, StopSchema } = require('./stop.model');
const { Unit, UnitSchema } = require('./unit.model');
const { User, UserSchema } = require('./user.model');
const { UnitDriver, UnitDriverSchema } = require('./unit-driver.model');

/**
 * Configura todos los modelos de la base de datos
 * para seguir las reglas de validación de Joi segun el esquema
 * @param {*} sequelize - Instancia de Sequelize
 */
function setupModels(sequelize) {
	Stop.init(StopSchema, Stop.config(sequelize));
	Unit.init(UnitSchema, Unit.config(sequelize));
	User.init(UserSchema, User.config(sequelize));
	UnitDriver.init(UnitDriverSchema, UnitDriver.config(sequelize));

	// Iniciar las relaciones
	Unit.associate(sequelize.models);
	User.associate(sequelize.models);
}

module.exports = setupModels;
