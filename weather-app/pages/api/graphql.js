import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start();

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await startServer;
  return server.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
