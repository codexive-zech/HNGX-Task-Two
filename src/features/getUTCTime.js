export const getDateInUtcFormate = (date) => {
  const today = new Date(date);
  const utcDateString = today.toUTCString();
  return utcDateString;
};
