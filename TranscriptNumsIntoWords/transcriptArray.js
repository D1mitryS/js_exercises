import { transcriptNumsBelowTwenty } from "./getCountingWord.js";
import splitAndTranscript from "./splitAndTranscript.js";

//Calls .map() callback with either transcriptNumsBelowTwenty() or splitAndTranscript().
export default arr => {
    const transcriptedArr = arr.map(
        num => {
            if (num >= 0 && num < 20) return transcriptNumsBelowTwenty(num);
            else if (num >= 20 && num < 100) return splitAndTranscript(num);
            else if (num === 100) return 'Hundred';

            return 'Wrong num';
        });
    return transcriptedArr.join('; ');
};