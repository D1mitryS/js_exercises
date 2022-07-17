//Print type of each number below 101 e.g. "prime" or "composite"
const printTypeOfNums = () => {
    for (let currentNum = 0; currentNum < 101; currentNum++) {
        console.log(`${currentNum} is ${getTypeOfNum(currentNum)} number`);
    };
    return 'end';
};

const getTypeOfNum = num => {
    if (num <= 1) return 'not a suitable';

    for (let divisor = 2; divisor <= (num / 2); divisor++) {
        if (num % divisor === 0) return 'a composite';
    };
    return 'a prime';
};

printTypeOfNums();