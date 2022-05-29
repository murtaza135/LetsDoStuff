import express from 'express';
import { protect } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  updatePassword,
  deleteProfile
} from './auth.controller.js';
import {
  setRegistrationValidationRules,
  setLoginValidationRules,
  setUpdateProfileValidationRules,
  setUpdatePasswordValidationRules
} from './auth.validation.js';

const router = express.Router();

router.route('/register')
  .post(setRegistrationValidationRules(), validate, registerUser);

router.route('/login')
  .post(setLoginValidationRules(), validate, loginUser);

router.route('/profile')
  .get(protect, getProfile)
  .put(protect, setUpdateProfileValidationRules(), validate, updateProfile)
  .delete(protect, deleteProfile);

router.route('/profile/password')
  .put(protect, setUpdatePasswordValidationRules(), validate, updatePassword);

export default router;
