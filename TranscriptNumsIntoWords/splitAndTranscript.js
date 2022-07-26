import { transcriptNumsBelowTwenty, transcriptNumsAboveTwenty } from "./getCountingWord.js";

/*Used either as callback by transcriptArray() or the return of transcriptNum(num).
Splits incoming one two-digit num into two one-digit nums, 
depending if the first of these nums is (num % 10 === 0) == true, returns either corresponded str
returned by transcriptNumsAboveTwenty() 
or combination of strs returned by transcriptNumsAboveTwenty() and transcriptNumsBelowTwenty(). */
export default num => {
    const firstDigitSymbol = num.toString()[0];
    if (num % 10 === 0) return transcriptNumsAboveTwenty(Number.parseInt(firstDigitSymbol, 10));

    const secondDigitSymbol = num.toString()[1];

    const firstNum = transcriptNumsAboveTwenty(Number.parseInt(firstDigitSymbol, 10));
    const secondNum = transcriptNumsBelowTwenty(Number.parseInt(secondDigitSymbol, 10));

    return `${firstNum}-${secondNum.toLowerCase()}`;
};