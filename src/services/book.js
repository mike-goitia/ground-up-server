import { Book } from '../models/book.js';

export const findRandomBook = () => {
  return Book.findOne();
}

export const getAllBooks = () => {
  return Book.find();
}