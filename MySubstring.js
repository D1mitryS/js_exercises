const mySubstring = (str, includedIndex, excludedIndex = str.length) => {
    let result = '';

    for (let i = includedIndex; i < excludedIndex; i++) {
        result += str[i];
    };
    return result;
};

const text = 'This call incudes only KEY word'
console.log(mySubstring(text, 23, 26));
console.assert(mySubstring(text, 23, 26) === 'KEY');

console.log(mySubstring(text, 27));
console.assert(mySubstring(text, 27) === 'word');