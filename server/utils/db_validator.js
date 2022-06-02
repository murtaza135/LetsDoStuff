import usersModel from '../features/user_auth/users.model.js';
import NotFoundError from '../error_handling/errors/notFoundError.js';
import ForbiddenError from '../error_handling/errors/forbiddenError.js';
import UnauthenticatedError from '../error_handling/errors/unauthenticatedError.js';
import DuplicateItemError from '../error_handling/errors/duplicateItemError.js';

export const ensureItemExists = (item, errorMessage) => {
  if (!item) {
    throw new NotFoundError(errorMessage);
  }

  return item;
};

export const findAndEnsureItemExists = async (model, filter, errorMessage) => {
  const item = await model.findOne(filter);
  ensureItemExists(item, errorMessage);
  return item;
};

export const ensureItemDoesNotExist = (item, errorMessage) => {
  if (item) {
    throw new DuplicateItemError(errorMessage);
  }

  return true;
};

export const findAndEnsureItemDoesNotExist = async (model, filter, errorMessage) => {
  const item = await model.findOne(filter);
  ensureItemDoesNotExist(item, errorMessage);
  return true;
};

export const ensureItemBelongsToUser = (
  (item, userId, notFoundErrorMessage, forbiddenErrorMessage) => {
    if (!item) {
      throw new NotFoundError(notFoundErrorMessage);
    }

    if (!userId || item.userId?.toString() !== userId) {
      throw new ForbiddenError(forbiddenErrorMessage);
    }

    return item;
  }
);

export const findAndEnsureItemBelongsToUser = (
  async (model, filter, userId, notFoundErrorMessage, forbiddenErrorMessage) => {
    const item = await model.findOne(filter);

    ensureItemBelongsToUser(
      item,
      userId,
      notFoundErrorMessage,
      forbiddenErrorMessage
    );

    return item;
  }
);

export const ensurePasswordIsValid = (
  async (user, password, errorMessage = 'Invalid Credentials') => {
    if (!user) {
      throw new NotFoundError(errorMessage);
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      throw new UnauthenticatedError(errorMessage);
    }

    return true;
  }
);

export const findUserAndEnsurePasswordIsValid = (
  async (filter, password, errorMessage = 'Invalid credentials') => {
    const user = await usersModel.findOne(filter).select('+password');
    await ensurePasswordIsValid(user, password, errorMessage);
    return true;
  }
);
