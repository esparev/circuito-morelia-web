const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

// Usando estrategia local passportjs
passport.use(LocalStrategy);
// Usando estrategia jwt passportjs
passport.use(JwtStrategy);
