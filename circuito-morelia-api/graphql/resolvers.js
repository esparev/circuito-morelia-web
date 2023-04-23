const {
	stop,
	stops,
	createStop,
	updateStop,
	deleteStop,
} = require('./stops.resolvers');
const {
	unit,
	units,
	createUnit,
	updateUnit,
	deleteUnit,
} = require('./units.resolvers');
const {
	user,
	users,
	createUser,
	updateUser,
	deleteUser,
} = require('./users.resolvers');
const {login} = require('./auth.resolvers');

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
	Mutation: {
		login,
		createStop,
		updateStop,
		deleteStop,
		createUnit,
		updateUnit,
		deleteUnit,
		createUser,
		updateUser,
		deleteUser,
	},
};

module.exports = resolvers;
