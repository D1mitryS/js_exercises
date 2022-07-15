//Get factorial n using recursion
const getFactorialUsingRecursion = n => {
    if (n === 1) return 1;
    return n * getFactorialUsingRecursion(n - 1);
};

console.log('recursion:');
console.log(`2! = ${getFactorialUsingRecursion(2)}`);
console.log(`4! = ${getFactorialUsingRecursion(4)}`);


//Get factorial n using iteration
const getFactorialUsingIteration = n => {
    const iter = (counter, acc) => {
        if (counter <= 1) return acc;
        return iter(counter - 1, acc * counter)
    };
    return iter(n, 1);
};

console.log('\niteration:');
console.log(`!1 = ${getFactorialUsingIteration(1)}`);
console.log(`!3 = ${getFactorialUsingIteration(3)}`)


//Get factorial n using "for" loop
const getFactorialUsingLoop = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log('\nloop:');
console.log(`5! = ${getFactorialUsingLoop(5)}`);
console.log(`0! = ${getFactorialUsingLoop(0)}`);