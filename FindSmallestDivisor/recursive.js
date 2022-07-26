export const smallestDivisorRecursive = (num, i = 2) => {
    if (num % i === 0) return i;
    else if (i > num / 2) return num;

    return smallestDivisorRecursive(num, i + 1);
};