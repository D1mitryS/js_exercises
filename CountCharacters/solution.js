import { countLoop } from "./loop.js";
import { countRecursively } from "./recursive.js";
import { test } from "./test.js";
import { testText1, testText2, testLetter1, testLetter2 } from "./sample.js"

console.log('loop:');
test(countLoop(testText1, testLetter1), 3);
test(countLoop(testText2, testLetter2), 2);

console.log('\nrecursion:');
test(countRecursively(testText1, testLetter1), 3);
test(countRecursively(testText2, testLetter2), 2);