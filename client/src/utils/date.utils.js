import { isValid, parseISO } from 'date-fns';

export const parseDateString = (dateString) => {
  const dateParsed = parseISO(dateString);
  return isValid(dateParsed) ? dateParsed : null;
};
