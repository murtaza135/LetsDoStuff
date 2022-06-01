import ServerError from '../errors/serverError.js';
import identifyUnknownErrors from './identifyUnknownErrors.js';
import 'colors';

class ErrorHandler {
  handleErrors = async (error, req, res, next) => {
    if (!error.isIdentified) {
      identifyUnknownErrors(error);
    }

    this.logError(error);
    this.sendErrorResponse(error, res);
  };

  logError = (error) => {
    console.log(error.stack.red);
  };

  sendErrorResponse = (error, res) => {
    if (this.isTrustedError(error)) {
      this.sendItentifiedError(error, res);
    } else {
      this.sendServerError(res);
    }
  };

  isTrustedError = (error) => {
    if (error.isIdentified) {
      return error.isOperational;
    }
    return false;
  };

  sendItentifiedError = (error, res) => {
    res.status(error.httpCode).json({
      success: false,
      type: error.type,
      message: error.message
    });
  };

  sendServerError = (res) => {
    const error = new ServerError();
    res.status(error.httpCode).json({
      success: false,
      type: error.type,
      message: error.message
    });
  };
}

export default new ErrorHandler();
