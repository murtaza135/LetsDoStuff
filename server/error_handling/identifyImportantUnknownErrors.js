/* eslint-disable no-param-reassign */
import BaseError from './errors/baseError.js';

const checkDbBadObjectIdError = (error) => {
  if (error.name === 'CastError') {
    const messageList = error.message.split('"');
    const modelName = messageList[messageList.length - 2];
    const message = `${modelName} not found with id of ${error.value}`;
    error.message = message;
    // error.name = 'NotFoundError';
    error.httpCode = 404;
    error.isOperational = true;
    error.identified = true;
  }
};

const checkDbDuplicateKeyError = (error) => {
  // NOTE error.name === MongoError
  if (error.code === 11000) {
    const message = 'Duplicate field value entered';
    error.message = message;
    // error.name = 'ValidationError';
    error.httpCode = 400;
    error.isOperational = true;
    error.identified = true;
  }
};

const checkDbValidationError = (error) => {
  // TODO make more robust, both custom error and db error are called 'ValidationError'
  if (!(error instanceof BaseError) && error.name === 'ValidationError') {
    const errorList = Object.values(error.errors);
    const message = errorList.map((val) => val.message).join(', ');
    error.message = message;
    error.httpCode = 400;
    error.isOperational = true;
    error.identified = true;
  }
};

const checkJwtInvalidError = (error) => {
  if (error.name === 'JsonWebTokenError') {
    const message = 'Not authorised to access this route';
    error.message = message;
    error.httpCode = 401;
    error.isOperational = true;
    error.identified = true;
  }
};

const checkJwtExpiredError = (error) => {
  if (error.name === 'TokenExpiredError') {
    const message = 'Please log in again';
    error.message = message;
    error.httpCode = 401;
    error.isOperational = true;
    error.identified = true;
  }
};

const identifyImportantUnknownErrors = (error) => {
  checkDbBadObjectIdError(error);
  checkDbDuplicateKeyError(error);
  checkDbValidationError(error);

  checkJwtInvalidError(error);
  checkJwtExpiredError(error);
};

export default identifyImportantUnknownErrors;
