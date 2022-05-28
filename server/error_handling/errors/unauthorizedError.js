import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class UnauthorizedError extends BaseError {
  constructor(
    message,
    httpCode = httpStatusCodes.UNAUTHORIZED,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}