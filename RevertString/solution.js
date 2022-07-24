import { loopRevert } from "./loop.js";
import { recursiveRevert } from "./recursive.js";
import { arrayRevert } from "./thruArray.js"
import { myStrObj } from "./method.js";
import { test } from "./test.js";

test(loopRevert('Yellow'), 'wolleY' );
test(recursiveRevert('Black'), 'kcalB' );
test(arrayRevert('White'), 'etihW');
test(myStrObj.revert('Ginger'), 'regniG');


