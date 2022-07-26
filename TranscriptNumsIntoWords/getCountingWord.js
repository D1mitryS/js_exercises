import { countingWordsBelowTwenty, countingWordsAboveTwenty } from "./countingWords.js";

//Gets Object propertie by it's number based on function parameter
const transcriptNumsBelowTwenty = num => countingWordsBelowTwenty[num];
const transcriptNumsAboveTwenty = num => countingWordsAboveTwenty[num];

export { transcriptNumsBelowTwenty, transcriptNumsAboveTwenty };