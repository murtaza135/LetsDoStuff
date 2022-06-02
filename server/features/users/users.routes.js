import express from 'express';
import { authenticate, authoriseAdmin } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import usersModel from './users.model.js';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from './users.controller.js';
import {
  setIncludeIdValidationRules,
  setCreateUserValidationRules,
  setUpdateProfileValidationRules
} from './users.validator.js';

const router = express.Router();

router.route('/')
  .get(advancedResults(usersModel), getUsers)
  .post(authenticate, authoriseAdmin, setCreateUserValidationRules(), validate, createUser);

router.route('/:id')
  .get(setIncludeIdValidationRules(), validate, getUser)
  .put(authenticate, authoriseAdmin, setUpdateProfileValidationRules(), validate, updateUser)
  .delete(authenticate, authoriseAdmin, setIncludeIdValidationRules(), validate, deleteUser);

export default router;
