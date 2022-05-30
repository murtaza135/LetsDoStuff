import { body, param } from 'express-validator';
import BaseError from '../../error_handling/errors/baseError.js';
import usersModel from './users.model.js';

// TODO create validation of params passed into advancedReesults

// TODO clean up
// eslint-disable-next-line max-len
const confirmMatchingPasswords = (otherPassword, errorMessage, errorCode) => (confirmPassword, { req }) => {
  if (confirmPassword !== req.body[otherPassword]) {
    throw new BaseError(errorMessage, errorCode, null);
  }

  return true;
};

export const setIncludeIdValidationRules = () => [
  param('id', 'Please provide an ID').not().isEmpty()
];

export const setCreateUserValidationRules = () => [
  body('name', 'Please provide a name').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('confirmPassword')
    .custom(confirmMatchingPasswords('password', 'Passwords do not match', 500))
];

export const setUpdateProfileValidationRules = () => [
  setIncludeIdValidationRules()[0],
  body('name', 'Please provide a valid name')
    .optional({ nullable: true }).not().isEmpty(),
  body('email', 'Please provide a valid email')
    .optional({ nullable: true }).isEmail()
];
