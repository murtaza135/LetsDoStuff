import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import pick from '../../utils/pick.js';
import UnauthenticatedError from '../../error_handling/errors/unauthenticatedError.js';

// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const registrationDetails = pick(req.body, ['name', 'email', 'password']);
  const user = await usersModel.create(registrationDetails);

  return res.status(201).json({
    success: true,
    user: user.getDetails(),
    token: getSignedJwtToken(user._id)
  });
});

// @desc Log user in
// @route POST /api/auth/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email }).select('+password');
  const isMatch = await user?.matchPassword(password);

  if (!isMatch) {
    throw new UnauthenticatedError('Invalid email or password');
  }

  return res.status(200).json({
    success: true,
    user: user.getDetails(),
    token: getSignedJwtToken(user._id)
  });
});

// @desc Get profile of logged in user
// @route GET /api/auth/profile
// @access Private
export const getProfile = asyncHandler(async (req, res, next) => (
  res.status(200).json({
    success: true,
    user: req.user.getDetails()
  })
));

// @desc Update profile (except password) of logged in user
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = asyncHandler(async (req, res, next) => {
  const detailsToUpdate = pick(req.body, ['name', 'email']);

  const updatedUser = await usersModel.findByIdAndUpdate(
    req.user._id,
    detailsToUpdate,
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    user: updatedUser.getDetails()
  });
});

// @desc Update password
// @route PUT /api/auth/profile/password
// @access Private
export const updatePassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const user = await usersModel.findById(req.user._id).select('+password');
  const isMatch = await user.matchPassword(oldPassword);

  if (!isMatch) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  req.user.password = newPassword;
  await req.user.save();

  return res.status(200).json({
    success: true,
    user: req.user.getDetails()
  });
});

// @desc Delete profile of logged in user
// @route DELETE /api/auth/profile
// @access Private
export const deleteProfile = asyncHandler(async (req, res, next) => {
  await usersModel.deleteOne({ id: req.user.id });
  delete req.user;
  res.status(200).json({ success: true, user: null });
});
