import BaseError from './baseError.js';

export default class UnauthenticatedError extends BaseError {
  constructor(
    message,
    httpCode = 401,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
