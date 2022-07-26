import * as samples from "./samples.js"
import { testArr, testNum } from "./test.js";

/*Transcript array of positive numbers into counting words, e.g [1] => ['One']; 
2, 3, 99 => ['Two'; 'Three'; 'Ninety-nine']
If number is lower than zero or higher than 100 is should be 'Wrong num'.
This function should also for work for numbers outside of array, e.g 10 => 'Ten'*/
console.log('arrays:');
testArr(samples.firstArr, samples.firstResult);
testArr(samples.secondArr, samples.secondResult);
testArr(samples.thirdArr, samples.thirdResult);
testArr([99, 66, 50, 55], 'Ninety-nine; Sixty-six; Fifty; Fifty-five');

console.log('\nnumbers:');
testNum(-Infinity, 'Wrong num')
testNum(5, 'Five');
testNum(69, 'Sixty-nine');
testNum(101, 'Wrong num');