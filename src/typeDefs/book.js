import { gql } from 'apollo-server';

export const book = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    book: Book
    books: [Book]
  }
`;