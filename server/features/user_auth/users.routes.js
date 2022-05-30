import express from 'express';
import { protect, adminRequired } from '../../middleware/auth.js';
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
} from './users.validation.js';

const router = express.Router();

router.route('/')
  .get(advancedResults(usersModel), getUsers)
  .post(protect, adminRequired, setCreateUserValidationRules(), validate, createUser);

router.route('/:id')
  .get(setIncludeIdValidationRules(), validate, getUser)
  .put(protect, adminRequired, setUpdateProfileValidationRules(), validate, updateUser)
  .delete(protect, adminRequired, setIncludeIdValidationRules(), validate, deleteUser);

export default router;
