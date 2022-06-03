import BaseError from './baseError.js';

export default class NotFoundError extends BaseError {
  constructor(
    message,
    httpCode = 404,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
