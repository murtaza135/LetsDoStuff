import express from 'express';
import { protect } from '../../middleware/auth.js';
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  deleteProfile
} from './auth.controller.js';

const router = express.Router();

router.route('/register')
  .post(registerUser);

router.route('/login')
  .post(loginUser);

router.route('/profile')
  .get(protect, getProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteProfile);

export default router;
