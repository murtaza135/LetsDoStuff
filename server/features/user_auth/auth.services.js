import usersModel from './users.model.js';
import { getSignedJwtToken } from '../../utils/customJwt.js';
import BaseError from '../../error_handling/errors/baseError.js';

export const registerUser = async ({ name, email, password, confirmPassword }) => {
  if (password !== confirmPassword) {
    return {
      success: false,
      error: new BaseError('Passwords do not match', 500, true)
    };
  }

  const user = await usersModel.create({ name, email, password });
  const userDetails = await user.getDetails();

  return {
    success: true,
    data: userDetails,
    token: getSignedJwtToken(user._id)
  };
};
