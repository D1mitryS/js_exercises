export const test = (val, example) => {
    console.log(val);
    console.assert(val === example, `${val} !== ${example}`);
};