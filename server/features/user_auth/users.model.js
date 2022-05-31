/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// import jwt from 'jsonwebtoken';
// import crypto from 'crypto';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true
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

// Match user entered password to hashed password in database and authenticate
UserSchema.methods.matchPassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

// Provide easy method to get all non-sensitive data for given user
UserSchema.methods.getDetails = function () {
  const userDetails = this.toObject({ versionKey: false, useProjection: true });
  delete userDetails.password;
  // delete userDetails.createdAt;
  // delete userDetails.updatedAt;
  return userDetails;
};

// TODO cascade delete todos when user is deleted?

export default mongoose.model('User', UserSchema);
