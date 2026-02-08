 /*const ValidityChecker = (x1, y1, x2, y2) => {
    const formula = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    function Helper(x1, y1, x2, y2) {
        if (formula % 1 === 0) {
            return `{"${x1}, ${y1}" to "0, 0" is valid}\n{"${x2}, ${y2}" to "0, 0" is valid}\n{"${x1}, ${y1}" to "${x2}, ${y2}" is valid}`;

        } else {
            return `{"${x1}, ${y1}" to "0, 0" is invalid}\n{"${x2}, ${y2}" to "0, 0" is invalid}\n{"${x1}, ${y1}" to "${x2}, ${y2}" is invalid}`;
        }

    }
    return Helper(x1, y1, x2, y2);

 }

 console.log(ValidityChecker(3, 0, 0, 4));
 console.log(ValidityChecker(2, 1, 1, 1));
*/


const ValidityChecker = (x1, y1, x2, y2) => {
    const check = (a1, b1, a2, b2) => {
        const distance = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);

        if (Number.isInteger(distance)) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);
        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);

        }
    };
    check(x1, y1, 0, 0);  
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2); 
}
ValidityChecker(3, 0, 0, 4);
ValidityChecker(2, 1, 1, 1);