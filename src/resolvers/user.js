// eslint-disable-next-line import/no-cycle
import { accountsServer } from '../index';

export const user = {
  Query: {
    me: (_, __, ctx) => {
      // ctx.userId will be set if user is logged in
      if (ctx.userId) {
        return accountsServer.findUserById(ctx.userId);
      }
      return null;
    },
  },
};
