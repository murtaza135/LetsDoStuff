import { validationResult } from 'express-validator';
import BaseError from '../error_handling/errors/baseError.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg).join(', ');
    throw new BaseError(messages, 400, null);
  }

  return next();
};

export default validate;
