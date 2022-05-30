import { body, param } from 'express-validator';
import todosModel from './todos.model.js';
import BaseError from '../../error_handling/errors/baseError.js';

const ensureTodoExists = (errorMessage, errorCode) => (id) => (
  todosModel.findById(id)
    .then((todo) => {
      if (!todo) {
        return Promise.reject(new BaseError(errorMessage, errorCode, null));
      }

      return true;
    })
);

export const setIncludeIdValidationRules = () => [
  param('id', 'Invalid ID').not().isEmpty()
];

export const setFindTodoValidationRules = () => [
  param('id', 'Invalid ID').not().isEmpty()
    .custom(ensureTodoExists('Todo does not exist', 500))
];
