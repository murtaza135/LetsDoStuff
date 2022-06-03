import express from 'express';
import { authenticate } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import * as controller from './todos.controller.js';
import * as validator from './todos.validator.js';

const router = express.Router({ mergeParams: true });
router.use(authenticate);

router.route('/')
  .post(validator.setAddTodoValidationRules(), validate, controller.addTodo)
  .get(controller.getTodos);

router.route('/:id')
  .get(validator.setIncludeTodoIdValidationRules(), validate, controller.getTodo)
  .put(validator.setUpdateTodoValidationRules(), validate, controller.updateTodo)
  .delete(validator.setIncludeTodoIdValidationRules(), validate, controller.deleteTodo);

router.route('/:id/complete')
  .put(validator.setIncludeTodoIdValidationRules(), validate, controller.udpateTodoToComplete);

export default router;
