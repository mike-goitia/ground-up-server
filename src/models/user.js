import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  favoriteBook: String,
  emails: Array,
});

export const User = mongoose.model('User', userSchema);
