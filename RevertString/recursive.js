export const recursiveRevert = (str, i = 0) => {
  if (i === str.length - 1) return str[i];

  return recursiveRevert(str, i + 1) + str[i];
};