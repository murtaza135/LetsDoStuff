/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import todosModel from '../todos/todos.model.js';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true
    },
    username: {
      type: String,
      required: [true, 'Please add a username'],
      unique: [true, 'This username is already taken'],
      trim: true,
      lowercase: true,
      maxlength: [25, 'Username is too long'],
      validate: [validator.isAlphanumeric, 'Your username can only have letters and numbers']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: [true, 'This email is already taken'],
      trim: true,
      validate: [validator.isEmail, 'Please add a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false,
      trim: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

// Encrypt password before saving to database
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

// Cascade delete todos when user is deleted
UserSchema.pre(['findOneAndDelete', 'findOneAndRemove', 'deleteOne'], async function (next) {
  const user = await this.model.findOne(this.getFilter());
  await todosModel.deleteMany({ userId: user._id });
  next();
});

// Match user entered password to hashed password in database and authenticate
UserSchema.methods.matchPassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

// Provide easy method to get all non-sensitive data for given user
UserSchema.methods.getData = function (timestamps = true) {
  const userDetails = this.toObject({ versionKey: false, useProjection: true });
  delete userDetails.password;

  if (timestamps === false) {
    delete userDetails.createdAt;
    delete userDetails.updatedAt;
  }

  return userDetails;
};

export default mongoose.model('User', UserSchema);
