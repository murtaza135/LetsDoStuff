import BaseError from './errors/baseError.js';
import ServerError from './errors/serverError.js';
import identifyImportantUnknownErrors from './identifyImportantUnknownErrors.js';
import 'colors';

class ErrorHandler {
  handleErrors = async (error, res) => {
    identifyImportantUnknownErrors(error);
    this.logError(error);

    if (this.isTrustedError(error)) {
      this.sendErrorResponseToUser(error, res);
    } else {
      this.sendServerError(res);
      // TODO log to external file
      // TODO send email
      // TODO gracefully restart
    }
  };

  logError = (error) => {
    console.log(error.stack.red);
  };

  sendErrorResponseToUser = (error, res) => {
    res.status(error.httpCode).json({
      type: error.name,
      message: error.message
    });
  };

  sendServerError = (res) => {
    const error = new ServerError();
    res.status(error.httpCode).json({
      type: error.name,
      message: error.message
    });
  };

  isTrustedError = (error) => {
    if (error instanceof BaseError || error.identified) {
      return error.isOperational;
    }
    return false;
  };
}

export default new ErrorHandler();
