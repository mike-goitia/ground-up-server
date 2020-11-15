import { findRandomBook, getAllBooks } from '../services/book';

export const book = {
  Query: {
    book: () => findRandomBook(),
    books: () => getAllBooks(),
  },
};
