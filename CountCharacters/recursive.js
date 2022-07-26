export const countRecursively = (str, lettter, counter = 0, i = 0) => {
    if (str[i].toLowerCase() === lettter.toLowerCase()) counter++;

    if (i === str.length - 1) return counter;

    return countRecursively(str, lettter, counter, i + 1);
};
