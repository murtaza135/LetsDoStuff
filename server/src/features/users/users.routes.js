import express from 'express';
import { authenticate, authoriseAdmin } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import * as controller from './users.controller.js';
import * as validator from './users.validator.js';

const router = express.Router();

router.route('/')
  .post(
    authenticate,
    authoriseAdmin,
    validator.setCreateUserValidationRules(),
    validate,
    controller.createUser
  )
  .get(controller.getUsers);

router.route('/:id')
  .get(validator.setIncludeIdValidationRules(), validate, controller.getUser)
  .put(
    authenticate,
    authoriseAdmin,
    validator.setUpdateProfileValidationRules(),
    validate,
    controller.updateUser
  )
  .delete(
    authenticate,
    authoriseAdmin,
    validator.setIncludeIdValidationRules(),
    validate,
    controller.deleteUser
  );

export default router;
