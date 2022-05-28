import BaseError from './baseError.js';
import httpStatusCodes from '../httpStatusCodes.js';

export default class TemplateError extends BaseError {
  constructor(
    message,
    httpCode,
    isOperational = true,
  ) {
    super(message, httpCode, isOperational);
  }
}