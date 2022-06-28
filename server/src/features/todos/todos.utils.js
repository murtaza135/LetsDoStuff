import { capitalizeFirstLetter } from '../../utils/string.utils.js';

export const removeDuplicateStringsFromArrayAndCapitalise = (array) => {
  if (!Array.isArray(array)) return array;
  const arrayLowerCase = array.map((value) => (
    typeof value === 'string' ? value.toLowerCase() : value
  ));
  const arrayWithNoDuplicates = [...new Set(arrayLowerCase)];
  const arrayWithTagsCapitalised = arrayWithNoDuplicates.map((value) => (
    capitalizeFirstLetter(value)
  ));
  return arrayWithTagsCapitalised;
};
