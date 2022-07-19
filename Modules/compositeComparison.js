export const isMoreThan = (foo, bar) => { 
    return (foo > bar) ? correctResult(foo, bar) : incorrectResult(foo, bar);
};

const correctResult = (foo, bar) => `Correct! ${foo} is more than ${bar}`;
const incorrectResult = (foo, bar) => `Incorrect! ${foo} is less than ${bar}`;


export default isMoreThan;