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

// TODO clean up
// eslint-disable-next-line max-len
const confirmMatchingPasswords = (otherPassword, errorMessage, errorCode) => (confirmPassword, { req }) => {
  if (confirmPassword !== req.body[otherPassword]) {
    throw new BaseError(errorMessage, errorCode, null);
  }

  return true;
};

// TODO clean up: this requires an email from either req.user or req.body, find a better way
// TODO to ensure that passwords match
const ensurePasswordIsCorrect = (errorMessage, errorCode) => (password, { req }) => (
  usersModel.findOne({ email: req.user?.email || req.body.email }).select('+password')
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
  body('confirmPassword')
    .custom(confirmMatchingPasswords('password', 'Passwords do not match', 500))
];

export const setLoginValidationRules = () => [
  body('email', 'Please provide a valid email').isEmail()
    .custom(ensureUserExists('Invalid email or password', 500)),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    .custom(ensurePasswordIsCorrect('Invalid email or password', 500)),
];

export const setUpdateProfileValidationRules = () => [
  body('name', 'Please provide a valid name')
    .optional({ nullable: true }).not().isEmpty(),
  body('email', 'Please provide a valid email')
    .optional({ nullable: true }).isEmail()
];

export const setUpdatePasswordValidationRules = () => [
  body('oldPassword', 'Password must be at least 6 characters long')
    .isLength({ min: 6 })
    .custom(ensurePasswordIsCorrect('Invalid email or password', 500)),
  body('newPassword', 'Password must be at least 6 characters long')
    .isLength({ min: 6 }),
  body('confirmPassword')
    .custom(confirmMatchingPasswords('newPassword', 'Passwords do not match', 500))
];
