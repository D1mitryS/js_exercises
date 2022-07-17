/*
Write a program that summarize the sequence of numbers.
The sequence is given by two values: begin - the beginning of the sequence, 
end - the end of the sequence
*/
const sumSequence = (begin, end) => {
    if (begin > end) return NaN;
    else if (begin === end) return begin;

    return begin + sumSequence(begin + 1, end);
};

console.log(sumSequence(5, 9));
console.assert(sumSequence(5, 9) === 35);

console.log('');
console.log(sumSequence(3, 7));
console.assert(sumSequence(3, 7) === 25)