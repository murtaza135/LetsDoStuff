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

// TODO new Date().getTimezoneOffset() = -60
// eslint-disable-next-line max-len
// TODO https://stackoverflow.com/questions/1091372/getting-the-clients-time-zone-and-offset-in-javascript
export const setAddTodoValidationRules = () => [
  // body('complete', '"Complete" may only be true or false')
  //   .optional({ nullable: true }).isBoolean(),
  body('title', 'Please provide a title').not().isEmpty(),
  body('description', 'Please provide a valid description')
    .optional({ nullable: true }).not().isEmpty(),
  body('deadlineDate', 'Please provide a valid date')
    .optional({ nullable: true }).toDate(),
  body('tags', 'Please provide an array of tags which are to be in String format')
    .isArray(),
  body('important', '"Important" may only be true or false')
    .optional({ nullable: true }).isBoolean(),
];
