export const capitalizeIteratively = (str, n) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const shouldBeBig = ((i + 1) % n) === 0; 
        result += shouldBeBig ? str[i].toUpperCase() : str[i];
    };

    return result;
};