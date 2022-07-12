// print substraction of 1000 by 7 recursively
const recursiveGhoul = num => {
    console.log(`${num} - 7 = ${num - 7}`);

    return (num <= 7) ? 'end' : recursiveGhoul(num - 7);
};

console.log(recursiveGhoul(1000));