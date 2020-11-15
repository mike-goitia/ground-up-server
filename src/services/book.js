import { Book } from '../models/book';

export const findRandomBook = () => Book.findOne();

export const getAllBooks = () => Book.find();
