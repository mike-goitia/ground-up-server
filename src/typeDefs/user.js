import { gql } from 'apollo-server-express';

export const user = gql`
  extend type User {
    favoriteBook: String
  }

  extend type CreateUserInput {
    favoriteBook: String
  }

  extend type CreateUserResult{
    id: ID
  }

  type Query {
    me: User
  }

  type Mutation {
    createNewUser(input: CreateUserInput!): User
  }
`;
