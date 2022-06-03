import express from 'express';
import { authenticate, authoriseAdmin } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
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
  .get(getUsers)
  .post(authenticate, authoriseAdmin, setCreateUserValidationRules(), validate, createUser);

router.route('/:id')
  .get(setIncludeIdValidationRules(), validate, getUser)
  .put(authenticate, authoriseAdmin, setUpdateProfileValidationRules(), validate, updateUser)
  .delete(authenticate, authoriseAdmin, setIncludeIdValidationRules(), validate, deleteUser);

export default router;
