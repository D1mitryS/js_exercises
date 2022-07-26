import { smallestDivisorLoop } from "./loop.js";
import { smallestDivisorRecursive } from "./recursive.js";
import { test } from "./test.js";

console.log('loop:');
test(smallestDivisorLoop(7), 7);
test(smallestDivisorLoop(1), 1);
test(smallestDivisorLoop(15), 3);
test(smallestDivisorLoop(3), 3);

console.log('\nrecursion')
test(smallestDivisorRecursive(7), 7);
test(smallestDivisorRecursive(1), 1);
test(smallestDivisorRecursive(15), 3);
test(smallestDivisorRecursive(3), 3);