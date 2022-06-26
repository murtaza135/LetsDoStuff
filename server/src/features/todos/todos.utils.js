import { capitalise } from '../../utils/stringUtils.js';

export const removeDuplicateStringsFromArrayAndCapitalise = (array) => {
  if (!Array.isArray(array)) return array;
  const arrayLowerCase = array.map((value) => (
    typeof value === 'string' ? value.toLowerCase() : value
  ));
  const arrayWithNoDuplicates = [...new Set(arrayLowerCase)];
  const arrayWithTagsCapitalised = arrayWithNoDuplicates.map((value) => capitalise(value));
  return arrayWithTagsCapitalised;
};
