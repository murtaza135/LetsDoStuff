import express from 'express';
import { protect } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import usersModel from './users.model.js';
import {
  getUsers
} from './users.controller.js';

const router = express.Router();

router.route('/')
  .get(advancedResults(usersModel), getUsers)
  .post();

router.route('/:id')
  .get()
  .put()
  .delete();

export default router;
