const { stop, stops } = require('./stops.resolvers');

/**
 * Resolvers de GraphQL
 */
const resolvers = {
	Query: {
		stops,
		stop,
	},
};

module.exports = resolvers;
