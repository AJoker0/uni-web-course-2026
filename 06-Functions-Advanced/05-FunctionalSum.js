


/* function add(n) {
    // Create a variable in the closure to store the current sum
    let sum = n;
    
    // create internal function that will be take next call 
    function calc(num) {
        sum += num; // add new number to the sum;
        return calc; // We return THIS FUNCTION ITSELF, so that the chain is not interrupted

    }
    // Redefin method toString() from our function calc
    calc.toString = function() {
        return sum; // whtn JS tries to convert our function to a string, we give the number

    };
    return calc;
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString()); */

function add(num) {
    function calc(nextNum) {
        return add(num + nextNum);
    }

    // (Hint)
    calc.toString = function() {
        return num;
    };
    return calc;

    
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
