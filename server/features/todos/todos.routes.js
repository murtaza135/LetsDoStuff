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
  udpateTodoToDone,
  deleteTodo
} from './todos.controller.js';
import {
  setIncludeIdValidationRules,
  setFindTodoValidationRules
} from './todos.validation.js';

const router = express.Router({ mergeParams: true });
router.use(protect);

// TODO advancedResults?
router.route('/')
  .get(getTodos)
  .post(addTodo);

router.route('/:id')
  .get(setFindTodoValidationRules(), validate, getTodo)
  .put(updateTodo)
  .put(udpateTodoToDone)
  .delete(deleteTodo);

export default router;
