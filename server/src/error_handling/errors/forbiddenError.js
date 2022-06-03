import BaseError from './baseError.js';

export default class ForbiddenError extends BaseError {
  constructor(
    message,
    httpCode = 403,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
