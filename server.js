const tyeDefs = `#graphql
    type = Query{
        greeting: String
    }
`;

const resolvers = {
    Query:{
        greeting: () => 'Hello World',
    }
}