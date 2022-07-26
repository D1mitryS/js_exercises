export const tailCallFactorial = num => {
    const getFactorial = (counter, result) => {
        return (counter < 2) ? result : getFactorial(counter - 1, counter * result);
    };

    return getFactorial (num, 1);
};