/* eslint-disable no-param-reassign */
import { capitalizeFirstLetter } from '../../utils/string.utils.js';

const checkJwtInvalidError = (error) => {
  if (error.name === 'JsonWebTokenError') {
    const message = 'Not authorised to access this route';
    error.message = message;
    error.name = 'UnauthenticatedError';
    error.type = 'UnauthenticatedError';
    error.httpCode = 401;
    error.isOperational = true;
    error.isIdentified = true;
    return true;
  }

  return false;
};

const checkJwtExpiredError = (error) => {
  if (error.name === 'TokenExpiredError') {
    const message = 'Please log in again';
    error.message = message;
    error.name = 'UnauthenticatedError';
    error.type = 'UnauthenticatedError';
    error.httpCode = 401;
    error.isOperational = true;
    error.isIdentified = true;
    return true;
  }

  return false;
};

const checkDbBadObjectIdError = (error) => {
  if (error.name === 'CastError') {
    const messageList = error.message.split('"');
    const modelName = messageList[messageList.length - 2];
    const message = `${modelName} not found with ID '${error.value}'`;
    error.message = message;
    error.type = 'NotFoundError';
    error.httpCode = 404;
    error.isOperational = true;
    error.isIdentified = true;
    return true;
  }

  return false;
};

const checkDbDuplicateKeyError = (error) => {
  if (error.code === 11000) {
    const errorKey = Object.keys(error.keyValue)[0];
    const message = `${capitalizeFirstLetter(errorKey)} is already taken`;
    error.message = message;
    error.type = 'DuplicateItemError';
    error.httpCode = 400;
    error.isOperational = true;
    error.isIdentified = true;
    return true;
  }

  return false;
};

const checkDbValidationError = (error) => {
  if (error.name === 'ValidationError') {
    const errorList = Object.values(error.errors);
    const message = errorList.map((val) => val.message).join(', ');
    error.message = message;
    error.type = 'DataValidationError';
    error.httpCode = 400;
    error.isOperational = true;
    error.isIdentified = true;
    return true;
  }

  return false;
};

const identifyUnknownErrors = (error) => {
  if (checkJwtInvalidError(error)) return true;
  if (checkJwtExpiredError(error)) return true;

  if (checkDbBadObjectIdError(error)) return true;
  if (checkDbDuplicateKeyError(error)) return true;
  if (checkDbValidationError(error)) return true;

  return false;
};

export default identifyUnknownErrors;
