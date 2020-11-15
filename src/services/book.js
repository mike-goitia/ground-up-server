import mongoose from 'mongoose';
import { Book } from '../models/book';

const { ObjectId } = mongoose.Types;

export const findRandomBook = () => Book.findOne();

export const getAllBooks = () => Book.find();

export const changeRenter = (id, renterName) => {
  return Book.findOneAndUpdate({ _id: ObjectId(id) }, { currentRenter: renterName });
};
