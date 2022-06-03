import { body } from 'express-validator';
import DataValidationError from '../../error_handling/errors/dataValidationError.js';

const confirmPasswordMatches = (otherPassword, errorMessage) => (
  (confirmPassword, { req }) => {
    if (confirmPassword !== req.body[otherPassword]) {
      throw new DataValidationError(errorMessage);
    }

    return true;
  }
);

export const setRegistrationValidationRules = () => [
  body('name', 'Please provide a name').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('confirmPassword')
    .custom(confirmPasswordMatches('password', 'Passwords do not match', 500))
];

export const setLoginValidationRules = () => [
  body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
];

export const setUpdateProfileValidationRules = () => [
  body('name', 'Please provide a valid name')
    .optional({ nullable: true }).not().isEmpty(),
  body('email', 'Please provide a valid email')
    .optional({ nullable: true }).isEmail()
];

export const setUpdatePasswordValidationRules = () => [
  body('oldPassword', 'Password must be at least 6 characters long')
    .isLength({ min: 6 }),
  body('newPassword', 'Password must be at least 6 characters long')
    .isLength({ min: 6 }),
  body('confirmPassword')
    .custom(confirmPasswordMatches('newPassword', 'Passwords do not match', 500))
];
