const pick = (obj, keys) => (
  keys
    .filter((key) => key in obj)
    .reduce((result, key) => {
      // eslint-disable-next-line no-param-reassign
      result[key] = obj[key];
      return result;
    }, {})
);

export default pick;
