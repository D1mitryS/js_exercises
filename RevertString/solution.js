import { loopRevert } from "./loop.js";
import { recursiveRevert } from "./recursive.js";
import { arrayRevert } from "./thruArray.js"
import { myStrObj } from "./method.js";

console.log(loopRevert('Yellow'));
console.assert(loopRevert('Yellow') === 'wolleY');

console.log(recursiveRevert('Black'));
console.assert(recursiveRevert('Black') === 'kcalB');

console.log(arrayRevert('White'));
console.assert(arrayRevert('White') === 'etihW');

console.log(myStrObj.revert('Ginger'));
console.assert(myStrObj.revert('Ginger') === 'regniG');


