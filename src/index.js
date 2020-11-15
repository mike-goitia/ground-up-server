import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// Setup project to use .env file
dotenv.config();

// Connect to a MongoDB
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`🚀 Connected to ${process.env.PROJECT_NAME} MongoDB`);
});

// Start Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 ${process.env.PROJECT_NAME} Server ready at ${url}`);
});
