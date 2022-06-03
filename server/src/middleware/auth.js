import asyncHandler from 'express-async-handler';
import UnauthenticatedError from '../error_handling/errors/unauthenticatedError.js';
import ForbiddenError from '../error_handling/errors/forbiddenError.js';
import { verifyTokenAndGetId } from '../utils/customJwt.js';
import usersModel from '../features/users/users.model.js';
import { ensureItemExists } from '../utils/dbValidator.js';

export const authenticate = asyncHandler(async (req, res, next) => {
  const id = verifyTokenAndGetId(req.headers.authorization);

  if (!id) {
    throw new UnauthenticatedError('You must login to access this route');
  }

  req.user = await usersModel.findById(id).select('+password');
  ensureItemExists(req.user, 'User no longer exists');
  return next();
});

export const authoriseAdmin = (req, res, next) => {
  if (!req.user?.isAdmin) {
    throw new ForbiddenError('Only admins may access this route');
  }

  return next();
};

export const authoriseRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return next(new ForbiddenError(
      `User with role '${req.user?.role}' is not authorised to access this route`
    ));
  }

  return next();
};
