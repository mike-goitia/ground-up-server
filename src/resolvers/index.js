import { book } from './book';
// eslint-disable-next-line import/no-cycle
import { user } from './user';

export const resolvers = [book, user];
