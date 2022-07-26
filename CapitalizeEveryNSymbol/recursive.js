export const capitalizeRecursively = (str, n, i = 0) => {
    const shouldBeBig = (i + 1) % n === 0;
    if (i === str.length - 1) return (shouldBeBig) ? str[i].toUpperCase() : str[i];
  
    return (shouldBeBig) ? str[i].toUpperCase() + capitalizeRecursively(str, n , i + 1) 
    : str[i] + capitalizeRecursively(str, n, i + 1);
  };