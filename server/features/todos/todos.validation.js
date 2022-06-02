import { body, param } from 'express-validator';

export const setIncludeTodoIdValidationRules = () => [
  param('id', 'Invalid ID').not().isEmpty()
];

// TODO new Date().getTimezoneOffset() = -60
// eslint-disable-next-line max-len
// TODO https://stackoverflow.com/questions/1091372/getting-the-clients-time-zone-and-offset-in-javascript
export const setAddTodoValidationRules = () => [
  body('title', 'Please provide a title').not().isEmpty(),
  body('description', 'Please provide a valid description')
    .optional({ nullable: true }).not().isEmpty(),
  body('deadlineDate', 'Please provide a valid date')
    .optional({ nullable: true }).toDate(),
  body('tags', 'Please provide an array of tags which are to be in String format')
    .optional({ nullable: true }).isArray(),
  body('important', '"Important" may only be true or false')
    .optional({ nullable: true }).isBoolean(),
];

export const setUpdateTodoValidationRules = () => [
  param('id', 'Invalid ID').not().isEmpty(),
  body('complete', '"Complete" may only be true or false')
    .optional({ nullable: true }).isBoolean(),
  body('title', 'Please provide a title')
    .optional().not().isEmpty(),
  body('description', 'Please provide a valid description')
    .optional({ nullable: true }).not().isEmpty(),
  body('deadlineDate', 'Please provide a valid date')
    .optional({ nullable: true }).toDate(),
  body('tags', 'Please provide an array of tags which are to be in String format')
    .optional({ nullable: true }).isArray(),
  body('important', '"Important" may only be true or false')
    .optional({ nullable: true }).isBoolean(),
];
