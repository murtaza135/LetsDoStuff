import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import BaseError from '../../error_handling/errors/baseError.js';

// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await usersModel.create({ name, email, password });
  const userDetails = await user.getDetails();

  return res.status(201).json({
    data: userDetails,
    token: getSignedJwtToken(user._id)
  });
});

// @desc Log user in
// @route POST /api/auth/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await usersModel.findOne({ email });
  const userDetails = await user.getDetails();

  return res.status(200).json({
    data: userDetails,
    token: getSignedJwtToken(user._id)
  });
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
