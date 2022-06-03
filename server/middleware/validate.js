import { validationResult } from 'express-validator';
import DataValidationError from '../error_handling/errors/dataValidationError.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg).join(', ');
    throw new DataValidationError(messages);
  }

  return next();
};

export default validate;
