import express from 'express';
import { protect } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';

const router = express.Router();

router.route('/')
  .get()
  .post();

router.route('/:id')
  .get()
  .put()
  .delete();

export default router;
