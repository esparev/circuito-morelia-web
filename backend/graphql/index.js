const { ApolloServer } = require('apollo-server-express');
const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');

const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		getPerson: (_, args) => `Hello ${args.name} you are ${args.age} years old`,
	},
};

const useGraphQL = async (app) => {
	const server = new ApolloServer({
		typeDefs: await loadFiles('./graphql/**/*.graphql'),
		resolvers,
		playground: true,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
	});

	await server.start();
	server.applyMiddleware({ app });
};

module.exports = useGraphQL;
