import { body, param } from 'express-validator';
import DataValidationError from '../../error_handling/errors/dataValidationError.js';

const confirmPasswordMatches = (otherPassword, errorMessage) => (
  (confirmPassword, { req }) => {
    if (confirmPassword !== req.body[otherPassword]) {
      throw new DataValidationError(errorMessage);
    }

    return true;
  }
);

export const setIncludeIdValidationRules = () => [
  param('id', 'Please provide an ID').not().isEmpty()
];

export const setCreateUserValidationRules = () => [
  body('name', 'Please provide a name').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail(),
  body('username', 'Please provide a valid username').isAlphanumeric(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('confirmPassword')
    .custom(confirmPasswordMatches('password', 'Passwords do not match', 500))
];

export const setUpdateProfileValidationRules = () => [
  setIncludeIdValidationRules()[0],
  body('name', 'Please provide a valid name')
    .optional({ nullable: true }).not().isEmpty(),
  body('email', 'Please provide a valid email')
    .optional({ nullable: true }).isEmail(),
  body('username', 'Please provide a valid username')
    .optional({ nullable: true }).isAlphanumeric()
];
