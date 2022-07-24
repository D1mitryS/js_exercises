export const capitalizeRecursively = (str, n, i = 0) => {
    if ((i === str.length - 1) && ((i + 1) % n === 0)) return str[i].toUpperCase();
    else if (i === str.length - 1) return str[i];
  
    else if ((i + 1) % n === 0) return str[i].toUpperCase() + capitalizeRecursively(str, n, i + 1);
    return str[i] + capitalizeRecursively(str, n, i + 1);
  };