import { body } from 'express-validator';
import BaseError from '../../error_handling/errors/baseError.js';

const confirmMatchingPasswords = (errorMessage, errorCode) => (confirmPassword, { req }) => {
  if (confirmPassword !== req.body.password) {
    throw new BaseError(errorMessage, errorCode, null);
  }

  return true;
};

export const setRegistrationValidationRules = () => [
  body('name', 'Please provide a name').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('confirmPassword').custom(confirmMatchingPasswords('Passwords do not match', 500))
];
