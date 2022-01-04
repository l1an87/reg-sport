export const isoToString = (date) => {
  if (!date) {
    return '';
  }
  const nDate = new Date(date);
  const dd = nDate.getDate()
    .toString()
    .padStart(2, '0');
  const mm = (nDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const yyyy = nDate.getFullYear();

  return `${dd}.${mm}.${yyyy}`;
};

export const stringToIso = (date) => {
  if (!date) {
    return '';
  }
  const [dd, mm, yyyy] = date
    .replaceAll(',', '.')
    .split('.');

  if (!yyyy) {
    return '';
  }

  return new Date(+yyyy, mm - 1, +dd, 8).toISOString();
};
