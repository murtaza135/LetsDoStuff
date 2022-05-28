import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class ForbiddenError extends BaseError {
  constructor(
    message,
    httpCode = httpStatusCodes.FORBIDDEN,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}