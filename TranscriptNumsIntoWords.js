const countingWordsBelowTwenty = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen'
};
const countingWordsAboveTwenty = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Fourty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
}

//Transcript arry of positive nums below 101 into array of words
const transcriptArrOfNums = arr => {
    const transcriptedArr = arr.map(num => {
        if (num < 20) return transcriptNumsBelowTwenty(num);
        else if (num >= 20 && num < 100) return splitAndTranscript(num);
        else if (num === 100) return 'Hundred';
        else return 'Wrong num';
    });
    return transcriptedArr.join('; ');
};

/*
Splits two digit number into two containing one number and calls either 
transcriptNumsBelowTwenty() or/and transcriptNumsAboveTwenty() 
*/
const splitAndTranscript = num => {
    const firstStr = String(num)[0];
    const secondStr = String(num)[1];

    if (num % 10 === 0) {
        return transcriptNumsAboveTwenty(Number(firstStr));
    } else {
        const firstNum = transcriptNumsAboveTwenty(Number(firstStr));
        const secondNum = transcriptNumsBelowTwenty(Number(secondStr));
        return `${firstNum}-${secondNum.toLowerCase()}`;
    };
};

};

const transcriptNumsBelowTwenty = num => countingWordsBelowTwenty[num];
const transcriptNumsAboveTwenty = num => countingWordsAboveTwenty[num];


const firstArrOfNums = [-10, -1, 05, 5];
const seconArrOfNums = [-21, 60, 68, 90];
const thirdArrOfNums = [99, 100, 101, 1000];

console.log(transcriptArrOfNums(firstArrOfNums));
console.assert(transcriptArrOfNums(firstArrOfNums) === 'Wrong num; Wrong num; Five; Five');

console.log(transcriptArrOfNums(seconArrOfNums));
console.assert(transcriptArrOfNums(seconArrOfNums) === 'Wrong num; Sixty; Sixty-eight; Ninety');

console.log(transcriptArrOfNums(thirdArrOfNums));
console.assert(transcriptArrOfNums(thirdArrOfNums) === 'Ninety-nine; Hundred; Wrong num; Wrong num');


//Transcript positive number below 101 into word using the samefunctions as arr.map()
const transcriptNumIntoWord = num => {
    if (num < 20) return transcriptNumsBelowTwenty(num);
    else if (num >= 20 && num < 100) return splitAndTranscript(num);
    else if (num === 100) return 'Hundred';
    else return 'Wrong num';
};

console.log('');
console.log(transcriptNumIntoWord(-5));
console.assert(transcriptNumIntoWord(-5) === 'Wrong num');

console.log(transcriptNumIntoWord(0));
console.assert(transcriptNumIntoWord(0) === 'Zero');

console.log(transcriptNumIntoWord(07));
console.assert(transcriptNumIntoWord(07) === 'Seven');

console.log(transcriptNumIntoWord(7));
console.assert(transcriptNumIntoWord(7) === 'Seven');

console.log(transcriptNumIntoWord(20));
console.assert(transcriptNumIntoWord(20) === 'Twenty');

console.log(transcriptNumIntoWord(21));
console.assert(transcriptNumIntoWord(21) === 'Twenty-one');


console.log(transcriptNumIntoWord(99));
console.assert(transcriptNumIntoWord(99) === 'Ninety-nine');

console.log(transcriptNumIntoWord(100));
console.assert(transcriptNumIntoWord(100) === 'Hundred');

console.log(transcriptNumIntoWord(150));
console.assert(transcriptNumIntoWord(150) === 'Wrong num');