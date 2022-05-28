import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class PageNotFoundError extends BaseError {
  constructor(
    message = '404 Page not found',
    httpCode = httpStatusCodes.NOT_FOUND,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}
