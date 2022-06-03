/* eslint-disable no-console */
import ServerError from '../errors/serverError.js';
import identifyUnknownErrors from './identifyUnknownErrors.js';
import 'colors';

class ErrorHandler {
  static handleErrors = async (error, req, res, next) => {
    if (!error.isIdentified) {
      identifyUnknownErrors(error);
    }

    ErrorHandler.logError(error);
    ErrorHandler.sendErrorResponse(error, res);
  };

  static logError = (error) => {
    console.log(error.stack.red);
  };

  static sendErrorResponse = (error, res) => {
    if (ErrorHandler.isTrustedError(error)) {
      ErrorHandler.sendItentifiedError(error, res);
    } else {
      ErrorHandler.sendServerError(res);
    }
  };

  static isTrustedError = (error) => {
    if (error.isIdentified) {
      return error.isOperational;
    }
    return false;
  };

  static sendItentifiedError = (error, res) => {
    res.status(error.httpCode).json({
      success: false,
      type: error.type,
      message: error.message
    });
  };

  static sendServerError = (res) => {
    const error = new ServerError();
    res.status(error.httpCode).json({
      success: false,
      type: error.type,
      message: error.message
    });
  };
}

export default ErrorHandler;
