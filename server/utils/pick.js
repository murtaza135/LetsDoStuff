const pick = (obj, keys) => (
  keys
    .filter((key) => key in obj)
    .reduce((newObj, key) => {
      // eslint-disable-next-line no-param-reassign
      newObj[key] = obj[key];
      return newObj;
    }, {})
);

export default pick;
