import { gql } from 'apollo-server-express';

export const book = gql`
  type Book {
    id: ID!
    title: String
    author: String
    currentRenter: String
  }

  input ChangeRenterInput {
    id: ID!
    renterName: String
  }

  type Query {
    book: Book
    books: [Book]
  }


  type Mutation {
    changeRenter(input: ChangeRenterInput): Book!
  }
`;
