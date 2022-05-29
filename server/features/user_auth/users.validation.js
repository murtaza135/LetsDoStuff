import { body, param } from 'express-validator';
import BaseError from '../../error_handling/errors/baseError.js';
import usersModel from './users.model.js';

// TODO create validation of params passed into advancedReesults

export const setIncludeIdValidationRules = () => [
  param('id', 'Please provide an ID').not().isEmpty()
];
