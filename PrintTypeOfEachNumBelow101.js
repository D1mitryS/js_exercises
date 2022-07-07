//Prints type of numbers below 101 e.g. "prime" or "composite"
const printTypeOfEachNumBelow101 = () => {
    let numberToCheck = 0;

    while (numberToCheck < 101) {
        console.log(`${numberToCheck} is ${getTypeOfNumber(numberToCheck)} number`);

        numberToCheck += 1;
    };

    return 'end';
};

const getTypeOfNumber = num => {
    if (num <= 1) return 'not a suitable';

    let divisor = 2

    while (divisor < num / 2) {
        const isComposite = num % divisor === 0;
        if (isComposite) return 'composite';

        divisor += 1;
    };
    return 'prime';
};

printTypeOfEachNumBelow101();