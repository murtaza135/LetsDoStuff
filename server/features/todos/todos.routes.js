import express from 'express';
import { authenticate } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  udpateTodoToComplete,
  deleteTodo
} from './todos.controller.js';
import {
  setIncludeTodoIdValidationRules,
  setAddTodoValidationRules,
  setUpdateTodoValidationRules,
} from './todos.validator.js';

const router = express.Router({ mergeParams: true });
router.use(authenticate);

// TODO advancedResults?
router.route('/')
  .get(getTodos)
  .post(setAddTodoValidationRules(), validate, addTodo);

router.route('/:id')
  .get(setIncludeTodoIdValidationRules(), validate, getTodo)
  .put(setUpdateTodoValidationRules(), validate, updateTodo)
  .delete(setIncludeTodoIdValidationRules(), validate, deleteTodo);

router.route('/:id/complete')
  .put(setIncludeTodoIdValidationRules(), validate, udpateTodoToComplete);

export default router;
