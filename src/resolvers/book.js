import { findRandomBook, getAllBooks, changeRenter } from '../services/book';

export const book = {
  Query: {
    book: () => findRandomBook(),
    books: () => getAllBooks(),
  },
  Mutation: {
    changeRenter: (_, { input: { id, renterName } }) => changeRenter(id, renterName),
  },
};
