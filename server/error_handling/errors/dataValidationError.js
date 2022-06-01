import BaseError from './baseError.js';

export default class DataValidationError extends BaseError {
  constructor(
    message,
    httpCode = 400,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
