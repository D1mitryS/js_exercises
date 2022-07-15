const fibNum = n => {
    if (n < 2) {
        console.log(`fibNum of ${n} = ${n}`)
        return n;
    } else {
        console.log(`fibNum of ${n} = fibNum(${n - 1}) + fibNum(${n - 2}) = ${(n - 1) + (n - 2)}`)
        return fibNum(n - 1) + fibNum(n - 2);
    };

};

console.log(fibNum(5));