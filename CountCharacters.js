//Count characters in a string case-insensitively
const countCharacters = (text, character) => {
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === character.toLowerCase()) counter += 1;
    }
    return counter;
};

const text = 'Imagination';
console.log(countCharacters(text , 'i'));
console.assert(countCharacters(text , 'i') === 3);


//Count characters inside a string case-sensitively
const countCharactersV1 = (text, character) => {
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === character) counter += 1;
    };
    return counter;
};

console.log(countCharactersV1(text, 'i'));
console.assert(countCharactersV1(text , 'i') === 2);