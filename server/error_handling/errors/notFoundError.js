import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class NotFoundError extends BaseError {
  constructor(
    message,
    httpCode = httpStatusCodes.NOT_FOUND,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
