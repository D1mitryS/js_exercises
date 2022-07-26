export const countLoop = (str, letter) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) result += 1;
    };
    return result;
};