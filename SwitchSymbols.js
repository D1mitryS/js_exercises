/*
Switch every first and second symbols in a string.
If amount of symbols in a string is odd keep the first symbol.
*/

const switchSymbols = str => {
  if (str) {
    let result = '';

    for (let i = 0; i < str.length; i += 2) {
      const nextSymbol = str[i + 1] || '';

      result += `${nextSymbol}${str[i]}`
    };

    return result;
  }
  return 'not a suitable argument'
};

console.log(switchSymbols('water'));
console.log(switchSymbols('cherry'));
console.log(switchSymbols(''));
console.log(switchSymbols());