/* eslint-disable no-console */
export const log = (fn) => (req, res, next) => {
  if (fn) {
    console.log(fn(req, res));
  } else {
    console.log(req);
  }

  return next();
};
