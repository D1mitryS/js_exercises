import { factorialLoop } from "./loop.js";
import { factorialRecursive } from "./recursive.js";
import { tailCallFactorial } from "./tailCall.js";
import { test } from "./test.js";

console.log('loop:');
test(factorialLoop(5), 120);
test(factorialLoop(4), 24)
test(factorialLoop(2), 2);
test(factorialLoop(0), 1);
test(factorialLoop(1), 1);


console.log('\nrecursion:');
test(factorialRecursive(5), 120);
test(factorialRecursive(4), 24);
test(factorialRecursive(2), 2);
test(factorialRecursive(0), 1);
test(factorialRecursive(1), 1);


console.log('\ntail call recursion:');
test(tailCallFactorial(5), 120);
test(tailCallFactorial(4), 24);
test(tailCallFactorial(2), 2)
test(tailCallFactorial(0), 1);
test(tailCallFactorial(1), 1);

