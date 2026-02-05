/*const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }

}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));*/


const gcd = (num1, num2) => {
    const limit = Math.min(num1, num2);

    for (let i = limit; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));