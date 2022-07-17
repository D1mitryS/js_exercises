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

const transcriptNumsBelowTwenty = num => {
    switch (num) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        case 10:
            return 'Ten';
        case 11:
            return 'Eleven';
        case 12:
            return 'Twelve';
        case 13:
            return 'Thirteen';
        case 14:
            return 'Fourteen';
        case 15:
            return 'Fifteen';
        case 16:
            return 'Sixteen';
        case 17:
            return 'Seventeen';
        case 18:
            return 'Eightenn';
        case 19:
            return 'Nineteen';
        default:
            return 'Wrong num';
    };
};

const transcriptNumsAboveTwenty = num => {
    switch (num) {
        case 2:
            return 'Twenty';
        case 3:
            return 'Thirty';
        case 4:
            return 'Forty';
        case 5:
            return 'Fifty';
        case 6:
            return 'Sixty';
        case 7:
            return 'Seventy';
        case 8:
            return 'Eighty';
        case 9:
            return 'Ninety';
        default:
            return 'Wrong num';
    };
};

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