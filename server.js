import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query:{
        greeting: () => 'Hello World',
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
    listen: { port: 9000 },
}).then(({ url }) => {
    console.log(`Server is running at ${url}`);
});