
/**
* @Author: 距离
* @Date:   2021-08-29 15:17:06
 * @Last Modified by: 距离
 * @Last Modified time: 2021-08-29 18:50:25
**/

const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


