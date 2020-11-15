import { createNewUser, getMe, logoutUser } from '../services/user';

export const user = {
  Query: {
    me: (_, __, ctx) => {
      return getMe({ ctx });
    },
  },
  Mutation: {
    createNewUser: async (_, { input: { email, password } }) => {
      return createNewUser({ email, password });
    },
    logoutUser: async (_, __, ctx) => {
      return logoutUser({ ctx });
    },
  },
};
