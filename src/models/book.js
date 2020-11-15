import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  currentRenter: String,
});

export const Book = mongoose.model('Book', bookSchema);
