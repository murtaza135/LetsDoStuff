import asyncHandler from 'express-async-handler';
import usersModel from '../users/users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import pick from '../../utils/pick.js';
import { ensureItemExists, ensurePasswordIsValid } from '../../utils/dbValidator.js';

// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const registrationDetails = pick(req.body, ['name', 'email', 'username', 'password']);
  const user = await usersModel.create(registrationDetails);

  return res.status(201).json({
    success: true,
    user: user.getData(),
    token: getSignedJwtToken(user._id)
  });
});

// @desc Log user in
// @route POST /api/auth/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await usersModel.findOne({ username }).select('+password');
  ensureItemExists(user, 'Invalid credentials');
  await ensurePasswordIsValid(user, password, 'Invalid credentials');

  return res.status(200).json({
    success: true,
    user: user.getData(),
    token: getSignedJwtToken(user._id)
  });
});

// @desc Get profile of logged in user
// @route GET /api/auth/profile
// @access Private
export const getProfile = asyncHandler(async (req, res, next) => (
  res.status(200).json({
    success: true,
    user: req.user.getData()
  })
));

// @desc Update profile (except password) of logged in user
// @route PUT /api/auth/profile
// @access Private
export const updateProfile = asyncHandler(async (req, res, next) => {
  const detailsToUpdate = pick(req.body, ['name', 'email', 'username']);

  const updatedUser = await usersModel.findByIdAndUpdate(
    req.user._id,
    detailsToUpdate,
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    user: updatedUser.getData()
  });
});

// @desc Update password
// @route PUT /api/auth/profile/password
// @access Private
export const updatePassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  await ensurePasswordIsValid(req.user, oldPassword, 'Invalid credentials');

  req.user.password = newPassword;
  await req.user.save();

  return res.status(200).json({
    success: true,
    user: req.user.getData()
  });
});

// @desc Delete profile of logged in user
// @route DELETE /api/auth/profile
// @access Private
export const deleteProfile = asyncHandler(async (req, res, next) => {
  await usersModel.findByIdAndDelete(req.user._id);
  return res.status(200).json({ success: true, user: null });
});
