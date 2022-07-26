import transcriptArray from "./transcriptArray.js";
import transcriptNum from "./transcriptNum.js";

//Logs in console and checks if transcriptArray() returns correct string.
const testArr = (arr, result) => {
    console.log(transcriptArray(arr));
    console.assert(transcriptArray(arr) === result, `${arr} !== ${result}`);
};

//Logs in console and checks if transcriptNum() returns correct string.
const testNum = (num, countingWord) => {
    console.log(transcriptNum(num));
    console.assert(transcriptNum(num) === countingWord, `${num} is not ${countingWord}`);
};

export { testArr, testNum }