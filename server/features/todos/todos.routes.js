import express from 'express';
import { protect } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import advancedResults from '../../middleware/advancedResults.js';
import todosModel from './todos.model.js';
import { } from './todos.controller.js';
import { } from './todos.validation.js';

const router = express.Router({ mergeParams: true });
router.use(protect);

router.route('/')
  .get()
  .post();

router.route('/:id')
  .get()
  .put()
  .put()
  .delete();

export default router;
