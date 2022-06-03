import express from 'express';
import { authenticate } from '../../middleware/auth.js';
import validate from '../../middleware/validate.js';
import * as controller from './auth.controller.js';
import * as validator from './auth.validator.js';

const router = express.Router();

router.route('/register')
  .post(validator.setRegistrationValidationRules(), validate, controller.registerUser);

router.route('/login')
  .post(validator.setLoginValidationRules(), validate, controller.loginUser);

router.route('/profile')
  .get(authenticate, controller.getProfile)
  .put(
    authenticate,
    validator.setUpdateProfileValidationRules(),
    validate,
    controller.updateProfile
  )
  .delete(authenticate, controller.deleteProfile);

router.route('/profile/password')
  .put(
    authenticate,
    validator.setUpdatePasswordValidationRules(),
    validate,
    controller.updatePassword
  );

export default router;
