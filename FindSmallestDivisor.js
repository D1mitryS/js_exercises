//Get the smallest divisor of the positive number using iterative process.
const getSmallestDivisorIteratively = num => {
    const iter = (divisor) => {
        if (divisor > (num / 2)) return num;
        else if (num % divisor === 0) return divisor;

        return iter(divisor + 1);
    };
    return iter(2);
};

console.log('iterative process:')
console.log(getSmallestDivisorIteratively(15));
console.assert(getSmallestDivisorIteratively(15) === 3);

console.log(getSmallestDivisorIteratively(4));
console.assert(getSmallestDivisorIteratively(4) === 2);

console.log(getSmallestDivisorIteratively(3));
console.assert(getSmallestDivisorIteratively(3) === 3);


//Get the smallest divisor of the positive number using a loop.
const getSmallestDivisorLoop = num => {
    if (num < 1) return NaN;
    
    let divisor = 2;
    
    while (divisor <= (num / 2)) {
        if (num % divisor === 0) return divisor;

        divisor += 1;
    };
    return num;
};

console.log('\nloop:');
console.log(getSmallestDivisorLoop(7));
console.assert(getSmallestDivisorLoop(7) === 7);

console.log(getSmallestDivisorLoop(2));
console.assert(getSmallestDivisorLoop(2) === 2);

console.log(getSmallestDivisorLoop(11));
console.assert(getSmallestDivisorLoop(11) === 11);

