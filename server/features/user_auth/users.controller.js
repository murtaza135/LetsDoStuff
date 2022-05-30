import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import BaseError from '../../error_handling/errors/baseError.js';
import pick from '../../utils/pick.js';

// @desc Get all users
// @route GET /api/v1/users
// @access Public
export const getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get single user
// @route GET /api/v1/users/:id
// @access Public
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);
  return user
    ? res.status(200).json({ success: true, data: user.getDetails() })
    : next(new BaseError(`User not found with ID '${req.params.id}'`, 404, null));
});

// @desc Create new user
// @route POST /api/v1/users
// @access Private/Admin
export const createUser = asyncHandler(async (req, res, next) => {
  const newUserDetails = pick(req.body, ['name', 'email', 'password']);
  const user = await usersModel.create(newUserDetails);

  return res.status(201).json({
    success: true,
    data: user.getDetails()
  });
});

// @desc Update single user
// @route PUT /api/v1/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async (req, res, next) => {
  const detailsToUpdate = pick(req.body, ['name', 'email']);

  const updatedUser = await usersModel.findByIdAndUpdate(
    req.params.id,
    detailsToUpdate,
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedUser.getDetails()
  });
});

// @desc Delete single user
// @route DELETE /api/v1/users/:id
// @access Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {
  await usersModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: null });
});
