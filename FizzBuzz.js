/* Write a program that prints the numbers from 1 to 100
and for multiples of '3' print "Fizz" instead of the number
and for the multiples of '5' print "Buzz".
For multiplies of '3' and '5' simultaneously the program should print "FizzBuzz" */
const fizzBuzz = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else (console.log(i));
    };
};

console.log('Normal fizzBuzz:')
fizzBuzz();


/* Replace numbers containing '3' with "Fizz" and numbers containing '5' with "Buzz" */
const fizzBuzzV1 = () => {
    for (i = 1; i <= 100; i++) {
        const numToStr = String(i);
        if (numToStr.includes('3') && numToStr.includes('5')) console.log('FizzBuzz');
        else if (numToStr.includes('3')) console.log('Fizz');
        else if (numToStr.includes('5')) console.log('Buzz');
        else console.log(i);
    };
};

console.log(' \nAltered fizzBuzz:')
fizzBuzzV1();
