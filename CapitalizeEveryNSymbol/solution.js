import { capitalizeRecursively } from "./recursive.js";
import { capitalizeIteratively } from "./loop.js";
import { test } from "./test.js";

const text = 'few words inside a string';

console.log('recursion:');
test(capitalizeRecursively(text, 3), 'feW wOrdS iNsiDe A sTriNg');
test(capitalizeRecursively(text, 2), 'fEw wOrDs iNsIdE A StRiNg');
test(capitalizeRecursively(text, 1), 'FEW WORDS INSIDE A STRING');

console.log('\niteration:');
test(capitalizeIteratively(text, 3), 'feW wOrdS iNsiDe A sTriNg');
test(capitalizeIteratively(text, 2), 'fEw wOrDs iNsIdE A StRiNg');
test(capitalizeIteratively(text, 1), 'FEW WORDS INSIDE A STRING');