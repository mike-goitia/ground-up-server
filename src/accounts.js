import { AccountsServer } from '@accounts/server';
import { AccountsPassword } from '@accounts/password';
import MongoDBInterface from '@accounts/mongo';

import { db } from './mongoose';

export const accountsPassword = new AccountsPassword();
export const accountsServer = new AccountsServer(
  {
    db: new MongoDBInterface(db),
    tokenSecret: process.env.ACCOUNTS_TOKEN_SECRET,
  },
  {
    password: accountsPassword,
  },
);
