import { body } from 'express-validator';
import BaseError from '../../error_handling/errors/baseError.js';
import usersModel from './users.model.js';

const ensureUserExists = (errorMessage, errorCode) => (email) => (
  usersModel.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new BaseError(errorMessage, errorCode, null));
      }

      return true;
    })
);

const ensureUserDoesNotExist = (errorMessage, errorCode) => (email) => (
  usersModel.findOne({ email })
    .then((user) => {
      if (user) {
        return Promise.reject(new BaseError(errorMessage, errorCode, null));
      }

      return true;
    })
);

const confirmMatchingPasswords = (errorMessage, errorCode) => (confirmPassword, { req }) => {
  if (confirmPassword !== req.body.password) {
    throw new BaseError(errorMessage, errorCode, null);
  }

  return true;
};

const ensurePasswordIsCorrect = (errorMessage, errorCode) => (password, { req }) => (
  usersModel.findOne({ email: req.body.email }).select('+password')
    .then((user) => user.matchPassword(password))
    .then((isMatch) => {
      if (!isMatch) {
        return Promise.reject(new BaseError(errorMessage, errorCode, null));
      }

      return true;
    })
);

export const setRegistrationValidationRules = () => [
  body('name', 'Please provide a name').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('confirmPassword').custom(confirmMatchingPasswords('Passwords do not match', 500))
];

export const setLoginValidationRules = () => [
  body('email', 'Please provide a valid email').isEmail()
    .custom(ensureUserExists('Invalid email or password', 500)),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    .custom(ensurePasswordIsCorrect('Invalid email or password', 500)),
];
