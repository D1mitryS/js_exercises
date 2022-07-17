const capitalizeEveryNSymbol = (text, symbolNum) => {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const shouldBeCapitalized = (i + 1) % symbolNum === 0;

        result += (shouldBeCapitalized) ? text[i].toUpperCase() : text[i];
    };
    return result;
};

const text = 'few words inside a string';
console.log(capitalizeEveryNSymbol(text, 3));
console.assert(capitalizeEveryNSymbol(text, 3) === 'feW wOrdS iNsiDe A sTriNg');

console.log(capitalizeEveryNSymbol(text, 2));
console.assert(capitalizeEveryNSymbol(text, 2) === 'fEw wOrDs iNsIdE A StRiNg');

console.log(capitalizeEveryNSymbol(text, 1));
console.assert(capitalizeEveryNSymbol(text, 1) === 'FEW WORDS INSIDE A STRING')