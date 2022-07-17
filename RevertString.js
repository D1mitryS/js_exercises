/* Revert string using method */
const myStrObj = {
    revert : function(str) {
        let result = '';

        for (let i = 0; i < str.length; i ++) {
            result = str[i] + result;
        };
        return result;
    },
};

console.log(myStrObj.revert('Cyan'));
console.assert(myStrObj.revert('Cyan') === 'nayC');


/* Revert string using closure */
function revertStrWithClosure(str) {
    let result = '';
    let counter = 0;

    return function() {
        while(counter < str.length) {
            result = str[counter] + result;
            counter ++;
        };
        return result;
    };
};
const revert = revertStrWithClosure('Black');

console.log(revert());
console.assert(revert() === 'kcalB')


/* Revert string using a loop */
const revertStr = (str) => {
    let result = '';

    for (let i = str.length - 1; i >= 0; i --) {
        result += str[i];
    };
    return result;
};

console.log(revertStr('Purple'));
console.assert(revertStr('Purple') === 'elpruP');


const revertStr1 = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i ++) {
        result = str[i] + result;
    };
    return result;
};

console.log(revertStr1('Yellow'));
console.assert(revertStr1('Yellow') === 'wolleY');


/*Revert string using array */
const revertStrThruArr = str => str.split('').reverse().join('');

console.log(revertStrThruArr('White'));
console.assert(revertStrThruArr('White') === 'etihW')