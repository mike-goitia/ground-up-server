import { User } from '../models/user';
import { accountsPassword, accountsServer } from '../accounts';

export const findUserByEmail = (email) => {
  return User.findOne({ emails: { address: email } });
};

export const getMe = ({ ctx }) => {
  if (ctx.userId) {
    return User.findById(ctx.userId);
  }
  return null;
};

export const createNewUser = async ({ email, password }) => {
  const newUserId = await accountsPassword.createUser({ email, password });
  const newUser = await User.findById(newUserId);
  return newUser;
};

export const logoutUser = async ({ ctx }) => {
  await accountsServer.logout(ctx.authToken);
  return true;
};
