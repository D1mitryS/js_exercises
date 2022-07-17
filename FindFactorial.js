//Get factorial n using recursive process
const factorialRec = n => {
    if (n === 1) return 1;

    return n * factorialRec(n - 1);
};

console.log('recursion:');
console.log(`2! = ${factorialRec(2)}`);
console.assert(factorialRec(2) === 2 , `2! != 2`);

console.log(`4! = ${factorialRec(4)}`);
console.assert(factorialRec(4) === 24, `4! != 24`)


//Get factorial n using iterative process
const factorialIter = n => {
    const iter = (counter, result) => {
        if (counter <= 1) return result;

        return iter(counter - 1, result * counter)
    };
    return iter(n, 1);
};

console.log('\niteration:');
console.log(`1! = ${factorialIter(1)}`);
console.assert(factorialIter(1) === 1, `1! != 1`);

console.log(`3! = ${factorialIter(3)}`);
console.assert(factorialIter(3) === 6, `3! != 6`);


//Get factorial n using a loop
const factorialLoop = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log('\nloop:');
console.log(`5! = ${factorialLoop(5)}`);
console.assert(factorialLoop(5) === 120, `5! != 120`);

console.log(`0! = ${factorialLoop(0)}`);
console.assert(factorialLoop(0) === 1, `0! != 1`);