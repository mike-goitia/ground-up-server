import { findRandomBook, getAllBooks } from '../services/book.js';

export const book = {
  Query: {
    book: () => findRandomBook(),
    books: () => getAllBooks(),
  },
};