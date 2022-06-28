export const parseDateString = (dateString) => {
  if (typeof dateString !== 'string') return null;

  try {
    const parsedDate = dateString ? new Date(dateString) : null;
    return parsedDate?.toString() !== 'Invalid Date' ? parsedDate : null;
  } catch (error) {
    return null;
  }
};
