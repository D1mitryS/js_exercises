export const test = (val, result) => {
    console.log(val);
    console.assert(val === result, `${val} !== ${result}`);
};