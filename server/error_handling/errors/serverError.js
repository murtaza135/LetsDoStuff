import BaseError from './baseError.js';

export default class ServerError extends BaseError {
  constructor(
    message = 'Server Error',
    httpCode = 500,
    isOperational = false
  ) {
    super(message, httpCode, isOperational);
  }
}
