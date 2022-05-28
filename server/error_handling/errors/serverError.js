import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class ServerError extends BaseError {
  constructor(
    message = 'Server Error',
    httpCode = httpStatusCodes.INTERNAL_SERVER,
    isOperational = false
  ) {
    super(message, httpCode, isOperational);
  }
}