import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import BaseError from '../../error_handling/errors/baseError.js';
import pick from '../../utils/pick.js';

// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const registrationDetails = pick(req.body, ['name', 'email', 'password']);
  const user = await usersModel.create(registrationDetails);
  const userDetails = user.getDetails();

  return res.status(201).json({
    user: userDetails,
    token: getSignedJwtToken(user._id)
  });
});

// @desc Log user in
// @route POST /api/auth/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await usersModel.findOne({ email });
  const userDetails = user.getDetails();

  return res.status(200).json({
    user: userDetails,
    token: getSignedJwtToken(user._id)
  });
});

// @desc Get profile of logged in user
// @route GET /api/auth/profile
// @access Private
export const getProfile = asyncHandler(async (req, res, next) => {
  const userDetails = req.user.getDetails();
  return res.status(200).json({ user: userDetails });
});

// @desc Update profile (except password) of logged in user
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = asyncHandler(async (req, res, next) => {
  const detailsToUpdate = pick(req.body, ['name', 'email']);

  const updatedUser = await usersModel.findByIdAndUpdate(
    req.user._id,
    detailsToUpdate,
    {
      new: true,
      runValidators: true
    }
  );

  return res.status(200).json({ user: updatedUser.getDetails() });
});

// @desc Update password
// @route PUT /api/auth/profile/password
// @access Private
export const updatePassword = asyncHandler(async (req, res, next) => {
  req.user.password = req.body.newPassword;
  await req.user.save();
  return res.status(200).json({ user: req.user.getDetails() });
});

// @desc Delete profile of logged in user
// @route DELETE /api/auth/profile
// @access Private
export const deleteProfile = asyncHandler(async (req, res, next) => {

});
