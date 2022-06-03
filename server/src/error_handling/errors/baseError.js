export default class BaseError extends Error {
  constructor(message, httpCode, isOperational) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.type = this.constructor.name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.isIdentified = true;

    Error.captureStackTrace(this);
  }
}
