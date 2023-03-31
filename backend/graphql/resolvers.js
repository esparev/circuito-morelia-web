const { stop, stops } = require('./stops.resolvers');
const { unit, units } = require('./units.resolvers');
const { user, users } = require('./users.resolvers');

/**
 * Resolvers de GraphQL
 */
const resolvers = {
	Query: {
		stops,
		stop,
		units,
		unit,
		users,
		user,
	},
};

module.exports = resolvers;
