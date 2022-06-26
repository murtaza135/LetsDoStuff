export const capitalizeFirstLetter = (phrase) => (
  phrase.charAt(0).toUpperCase() + phrase.slice(1)
);

export const capitalizeFirstLetterOfEveryWord = (phrase) => (
  phrase
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
);
