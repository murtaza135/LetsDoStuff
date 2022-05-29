/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: [true, 'This email is already taken'],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false
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
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
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

export default mongoose.model('User', UserSchema);
