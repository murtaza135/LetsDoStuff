import asyncHandler from 'express-async-handler';
import usersModel from './users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import BaseError from '../../error_handling/errors/baseError.js';
import pick from '../../utils/pick.js';

// @desc Get all users
// @route GET /api/v1/users
// @access Public
export const getUsers = asyncHandler(async (req, res, next) => {

});

// @desc Get single user
// @route GET /api/v1/users/:id
// @access Public
export const getUser = asyncHandler(async (req, res, next) => {

});

// @desc Create new user
// @route POST /api/v1/users
// @access Private/Admin
export const createUser = asyncHandler(async (req, res, next) => {

});

// @desc Update single user
// @route PUT /api/v1/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async (req, res, next) => {

});

// @desc Delete single user
// @route DELETE /api/v1/users/:id
// @access Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {

});
