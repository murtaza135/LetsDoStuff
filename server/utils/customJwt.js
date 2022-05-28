import jwt from 'jsonwebtoken';

const extractTokenFromBearer = (token) => {
  if (token?.startsWith('Bearer')) {
    return token.split(' ')[1];
  }

  return null;
};

export const getSignedJwtToken = (id) => jwt.sign(
  { id },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRE_TIME || null }
);

export const verifyTokenAndGetId = (token) => {
  const extractedToken = extractTokenFromBearer(token);

  if (extractedToken) {
    return jwt.verify(extractedToken, process.env.JWT_SECRET).id;
  }

  return null;
};
