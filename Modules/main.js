import { sum as summarizeTwoNums } from './basicMath.js';
import * as myMath from './basicMath.js';
import namelessPow from './defaultMathPow.js';
import isMoreThan from './compositeComparison.js'

console.log(summarizeTwoNums(5, 5));
console.assert(summarizeTwoNums(5, 5) === 10);


console.log('');
console.log(myMath.sub(3, 6));
console.assert(myMath.sub(3, 6) === -3);

console.log(myMath.mult(-2, 5));
console.assert(myMath.mult(-2, 5) !== 10);

console.log(myMath.div(7, 7));
console.assert(myMath.div(7, 7) !== 0);


console.log('');
console.log(namelessPow(3));
console.assert(namelessPow(3) === 9);


console.log('');
console.log(isMoreThan(1, 0));
console.assert(isMoreThan(1, 0) === 'Correct! 1 is more than 0');
