/*
Write a program that summarize the sequence of numbers.
The sequence is given by two values: begin - the beginning of the sequence, 
end - the end of the sequence
*/
const sumSequence = (begin, end) => {
    if (begin > end) {
        return NaN;
    }
    else if (begin === end) {
        console.log(`sumSequence(${begin}) = ${begin}`)
        return begin;
    };
    
    console.log(`sumSequence(${begin}) = ${begin} + sumSequence(${begin + 1})`)
    return begin + sumSequence(begin + 1, end);
};

console.log(sumSequence(5, 9))