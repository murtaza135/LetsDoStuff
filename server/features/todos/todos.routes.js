import express from 'express';
import { protect } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import todosModel from './todos.model.js';
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  udpateTodoToComplete,
  deleteTodo
} from './todos.controller.js';
import {
  setFindTodoValidationRules,
  setAddTodoValidationRules,
  setUpdateTodoValidationRules,
} from './todos.validation.js';

const router = express.Router({ mergeParams: true });
router.use(protect);

// TODO advancedResults?
router.route('/')
  .get(getTodos)
  .post(setAddTodoValidationRules(), validate, addTodo);

router.route('/:id')
  .get(setFindTodoValidationRules(), validate, getTodo)
  .put(setUpdateTodoValidationRules(), validate, updateTodo)
  .delete(setFindTodoValidationRules(), validate, deleteTodo);

router.route('/:id/complete')
  .put(setFindTodoValidationRules(), validate, udpateTodoToComplete);

export default router;
