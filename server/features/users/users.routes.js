import express from 'express';
import { authenticate, adminOnly } from '../../middleware/auth.js';
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
  .post(authenticate, adminOnly, setCreateUserValidationRules(), validate, createUser);

router.route('/:id')
  .get(setIncludeIdValidationRules(), validate, getUser)
  .put(authenticate, adminOnly, setUpdateProfileValidationRules(), validate, updateUser)
  .delete(authenticate, adminOnly, setIncludeIdValidationRules(), validate, deleteUser);

export default router;
