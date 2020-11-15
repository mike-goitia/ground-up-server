import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

import { AccountsModule } from '@accounts/graphql-api';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import { accountsServer } from './accounts';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// Setup project to use .env file
dotenv.config();

// accounts-js to use the mongo connection
const accountsGraphQL = AccountsModule.forRoot({ accountsServer });
const mergedTypedefs = mergeTypeDefs([...typeDefs, accountsGraphQL.typeDefs]);
const mergedResolvers = mergeResolvers([...resolvers, accountsGraphQL.resolvers]);
const schema = makeExecutableSchema({
  typeDefs: mergedTypedefs,
  resolvers: mergedResolvers,
  schemaDirectives: {
    ...accountsGraphQL.schemaDirectives,
  },
});

// Start Apollo Server
const server = new ApolloServer({
  schema,
  context: accountsGraphQL.context,
});
const app = express();
server.applyMiddleware({ app });
app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀 ${process.env.PROJECT_NAME} Server Ready on port: ${process.env.PORT}`);
});
app.get('/', (req, res) => {
  res.send(`🚀 ${process.env.PROJECT_NAME}`);
});

export default server;
