const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

/**
 * Opciones de estrategia passport-jwt
 */
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.jwtSecret,
};

/**
 * Estrategia de passport para autenticar con un token JSON Web Token
 */
const JwtStrategy = new Strategy(options, (payload, done) => {
	return done(null, payload);
});

module.exports = JwtStrategy;
