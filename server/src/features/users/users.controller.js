import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import { ensureItemExists } from '../../utils/db_validator.js';
import pick from '../../utils/pick.js';
import ApiFeatures from '../../utils/apiFeatures.js';

// @desc Create new user
// @route POST /api/users
// @access Private/Admin
export const createUser = asyncHandler(async (req, res, next) => {
  const newUserDetails = pick(req.body, ['name', 'email', 'password']);
  const user = await usersModel.create(newUserDetails);
  return res.status(201).json({ success: true, data: user.getData() });
});

// @desc Get all users
// @route GET /api/users
// @access Public
export const getUsers = asyncHandler(async (req, res, next) => {
  const apiFeatures = new ApiFeatures(req.query, usersModel);
  await apiFeatures.applyAllAdvancedFeatures();
  const data = await apiFeatures.getQueryData();
  res.status(200).json({ success: true, ...data });
});

// @desc Get single user
// @route GET /api/users/:id
// @access Public
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);
  ensureItemExists(user, `User not found with ID '${req.params.id}'`);
  return res.status(200).json({ success: true, data: user.getData() });
});

// @desc Update single user
// @route PUT /api/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);
  ensureItemExists(user, `User not found with ID '${req.params.id}'`);

  const newUserDetails = pick(req.body, ['name', 'email']);

  const updatedUser = await usersModel.findByIdAndUpdate(
    req.params.id,
    newUserDetails,
    { new: true, runValidators: true }
  );

  return res.status(200).json({
    success: true,
    data: updatedUser.getData()
  });
});

// @desc Delete single user
// @route DELETE /api/users/:id
// @access Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await usersModel.findById(req.params.id);
  ensureItemExists(user, `User not found with ID '${req.params.id}'`);
  await usersModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true, data: null });
});
