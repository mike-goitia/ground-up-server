import dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

dotenv.config()

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`🚀 Connected to ${process.env.PROJECT_NAME} MongoDB`)
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 ${process.env.PROJECT_NAME} Server ready at ${url}`);
});
