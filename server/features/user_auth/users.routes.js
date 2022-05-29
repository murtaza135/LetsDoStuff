import express from 'express';
import { protect, authorise } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import usersModel from './users.model.js';
import {
  getUsers,
  getUser
} from './users.controller.js';
import {
  setIncludeIdValidationRules
} from './users.validation.js';

const router = express.Router();

router.route('/')
  .get(advancedResults(usersModel), getUsers)
  .post();

router.use(setIncludeIdValidationRules()).route('/:id')
  .get(getUser)
  .put()
  .delete();

export default router;
