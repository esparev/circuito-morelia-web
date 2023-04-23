const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
const GQLLocalStrategy = require('./strategies/local-gql.strategy');

// Usando estrategia local passportjs
passport.use(LocalStrategy);
// Usando estrategia jwt passportjs
passport.use(JwtStrategy);
// Usando estrategia local graphql passportjs
passport.use(GQLLocalStrategy)
