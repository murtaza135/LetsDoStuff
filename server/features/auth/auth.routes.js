import express from 'express';
import { authenticate } from '../../middleware/auth.js';
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
} from './auth.validator.js';

const router = express.Router();

router.route('/register')
  .post(setRegistrationValidationRules(), validate, registerUser);

router.route('/login')
  .post(setLoginValidationRules(), validate, loginUser);

router.route('/profile')
  .get(authenticate, getProfile)
  .put(authenticate, setUpdateProfileValidationRules(), validate, updateProfile)
  .delete(authenticate, deleteProfile);

router.route('/profile/password')
  .put(authenticate, setUpdatePasswordValidationRules(), validate, updatePassword);

export default router;
