import NotFoundError from './notFoundError.js';

export default class PageNotFoundError extends NotFoundError {
  constructor(message = '404 Page not found') {
    super(message);
  }
}
