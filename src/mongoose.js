import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Setup project to use .env file
dotenv.config();

// Connect to a MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`🚀 Connected to ${process.env.PROJECT_NAME} MongoDB`);
});
