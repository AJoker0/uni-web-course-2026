/*const sameNumbers = (number) => {
    for (let i = 0; i < number.toString().length - 1; i++) {
        if (number.toString()[i] !== number.toString()[i + 1]) {
            return `false\n${number.toString().split('').map(Number).reduce((a, b) => a + b, 0)}`;
        } else {
            continue;
        }
        
    }
    const digits = number.toString().split('').map(Number)
    const sum = digits.reduce((a, b) => a + b, 0);
    return `true\n${sum}`;

}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));*/



const sameNumbers = (number) => {
    // convert number to array of digits 
    const digits = number.toString().split('').map(Number);
    // calculate the sum of digits
    const sum = digits.reduce((a, b) => a + b, 0);
    // check if all digits are the same
    const allSame = digits.every(digit => digit === digits[0]);
    //return the result 
    return `${allSame}\n${sum}`;
}
console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));