import asyncHandler from 'express-async-handler';
import BaseError from '../error_handling/errors/baseError.js';
import { verifyTokenAndGetId } from '../utils/customJwt.js';
import usersModel from '../features/users_and_auth/users.model.js';

export const protect = asyncHandler(async (req, res, next) => {
  const id = verifyTokenAndGetId(req.headers.authorization);

  if (!id) {
    return next(new BaseError('Not authorised to access this route'));
  }

  req.user = await usersModel.findById(id);
  return next();
});

export const authorise = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new BaseError(
      `User with role '${req.user.role}' is not authorised to access this route`
    ));
  }
  return next();
};

// TODO add middleware to check if the resource being modified actually belongs to the user
// TODO eg. if user #1 placed order A, then make sure only user #1 can edit order A
