import asyncHandler from 'express-async-handler';
import { registerUser as registerUserService } from './auth.services.js';

// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const reqData = { name, email, password, confirmPassword };
  const { success, data, token, error } = await registerUserService(reqData);
  return success ? res.status(201).json({ data, token }) : next(error);
});

// @desc Log user in
// @route POST /api/auth/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {

});

// @desc Get profile of logged in user
// @route GET /api/auth/profile
// @access Private
export const getProfile = asyncHandler(async (req, res, next) => {

});

// @desc Update profile (except password) of logged in user
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = asyncHandler(async (req, res, next) => {

});

// @desc Delete profile of logged in user
// @route DELETE /api/auth/profile
// @access Private
export const deleteProfile = asyncHandler(async (req, res, next) => {

});
