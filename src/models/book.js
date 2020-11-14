const { Mongoose } = require("mongoose");

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
});

export const Book = mongoose.model('Book', bookSchema);