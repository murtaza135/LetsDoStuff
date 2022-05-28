import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class ValidationError extends BaseError {
  constructor(
    message,
    httpCode = httpStatusCodes.BAD_REQUEST,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}