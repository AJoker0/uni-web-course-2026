const fib = () => {
    fibState.currentNumberIndex++;
    if (fibState.currentNumberIndex < 3) {
        return 1
    } 

    let a = 1;
    let b = 1;


    for (let i = 0; i < fibState.currentNumberIndex - 2; i++) {
        const next = a + b;
        a = b;
        b = next;

    }
    return b;
}

const fibState = {
    currentNumberIndex: 0,
    lastLastNumber: 0,
    lastNumber: 0
}

const fibReset = () => {
    fibState.currentNumberIndex = 0;
    fibState.lastLastNumber = 0;
    fibState.lastNumber = 0;

}

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5 
console.log(fib()); // 8
console.log(fib()); // 13
console.log(fib()); // 21
console.log(fib()); // 34
console.log(fib()); // 55
fibReset();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5 
console.log(fib()); // 8
console.log(fib()); // 13
console.log(fib()); // 21
console.log(fib()); // 34
console.log(fib()); // 55



/* const fibRec = (n) => {
    if (n < 3) {
        return 1;
    }
    return fibRec(n - 1) + fibRec(n - 2);
}
console.log(fibRec(1)); */


/* const fibState = {
    step: 0,
    prev: 0,
    curr: 1
};
const fib = () => {
    if (fibState.step === 0) {
        fibState.step++;
        return 1;
    }
    const next = fibState.prev + fibState.curr;
    
    fibState.prev = fibState.curr;
    fibState.curr = next;
    fibState.step++;

    return fibState.curr;
}
const fibReset = () => {
    fibState.step = 0;
    fibState.prev = 0;
    fibState.curr = 1;
}
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3 */