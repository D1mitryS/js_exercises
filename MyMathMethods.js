const myMathObj = {
    round: function (num) {
        const numToStr = String(num);

        if (numToStr.includes('.')) {
            let result = 0;

            for (let i = 0; i < numToStr.length; i++) {
                const isDotSymbol = numToStr[i] === '.';

                if (isDotSymbol) {
                    result += Number(numToStr.substring(0, i));

                    const floatStr = numToStr.substring(i + 1);
                    let divisor = 1;

                    for (let i = 0; i < floatStr.length; i++) {
                        divisor *= 10;
                    };
                    const float = Number(floatStr) / divisor;

                    if (float >= 0.5) result += 1;
                };
            };
            return result;
        };
        return num;
    },

    floor: function (num) {
        const numToStr = String(num);

        if (numToStr.includes('.')) {
            let result = 0;

            for (let i = 0; i < numToStr.length; i++) {
                const isDotSymbol = numToStr[i] === '.';

                if (isDotSymbol) result = Number(numToStr.substring(0, i));
            };
            return result;
        };
        return num;
    },

    ceil: function (num) {
        const numToStr = String(num);

        if (numToStr.includes('.')) {
            let result = 0;

            for (let i = 0; i < numToStr.length; i++) {
                const isDotSymbol = numToStr[i] === '.';

                if (isDotSymbol) {
                    result += Number(numToStr.substring(0, i));

                    const floatStr = numToStr.substring(i + 1);
                    let divisor = 1;

                    for (let i = 0; i < floatStr.length; i++) {
                        divisor *= 10;
                    };
                    const float = Number(floatStr) / divisor;

                    if (float > 0) result += 1;
                };
            };
            return result;
        };
        return num;
    },
};

console.log(myMathObj.round(554));
console.log(myMathObj.round(554.4999));
console.log(myMathObj.round(554.6));
console.log(myMathObj.ceil(99));
console.log(myMathObj.ceil(99.00001));
console.log(myMathObj.ceil(99.9999));
console.log(myMathObj.floor(1111));
console.log(myMathObj.floor(1111.1));
console.log(myMathObj.floor(1111.999));
