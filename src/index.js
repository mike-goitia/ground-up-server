import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import mongoose from 'mongoose';
import MongoDBInterface from '@accounts/mongo';
import { AccountsServer } from '@accounts/server';
import { AccountsPassword } from '@accounts/password';
import { AccountsModule } from '@accounts/graphql-api';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import { typeDefs } from './typeDefs';
// eslint-disable-next-line import/no-cycle
import { resolvers } from './resolvers';

// Setup project to use .env file
dotenv.config();

// Connect to a MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`🚀 Connected to ${process.env.PROJECT_NAME} MongoDB`);
});

// accounts-js to use the mongo connection
const accountsMongo = new MongoDBInterface(mongoose.connection);
const password = new AccountsPassword();
export const accountsServer = new AccountsServer(
  {
    // We link the mongo adapter we created in the previous step to the server
    db: accountsMongo,
    // Replace this value with a strong random secret
    tokenSecret: process.env.ACCOUNTS_TOKEN_SECRET,
  },
  {
    password,
  },
);
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
