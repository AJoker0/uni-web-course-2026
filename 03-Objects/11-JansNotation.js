/* const JansNotation = (input) => {
    let stack = [];

    for (let i = 0; i < input.length; i++) {
        let token = input[i];

        if (typeof token === 'number') {
            stack.push(token);
        } else {
            if (stack.length < 2) {
                return "Error: not enough operands!";
            }
            let b = stack.pop();
            let a = stack.pop();
            let result; // initialize variable before switch

            switch (token) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = a /b; break;
            }
            
            stack.push(result);
        }
        

    }
    if (stack.length > 1) {
        return "Error: too many operands!";

    }
    return stack[0];


}
console.log(JansNotation([3, 4, '+']));          // 7
console.log(JansNotation([5, 3, 4, '*', '-']));  // -7
console.log(JansNotation([7, 33, 8, '-']));

 */


function jansNotation(input) {
    // create a stack to hold operands
    let stack = [];

    // iterate through each token in the input
    for (let i = 0; i < input.length; i++) {
        let instruction = input[i];

        // if the token is a number, push it onto the stack
        if (typeof instruction === 'number') {
            stack.push(instruction);
        }
        // if the token is an operator
        else {
            // at first check if we have at least 2 operands in the stack
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
            // get the last two operands from the stack
            // pop() get the last added element , that's why it will be the second operand
            let b = stack.pop();
            let a = stack.pop();

            let result;
            if (instruction === '+') result = a + b;
            else if (instruction === '-') result = a - b;
            else if (instruction === '*') result = a * b;
            else if (instruction === '/') result = a / b;

            // push the result back onto the stack
            stack.push(result);
        }
    }
    // the final check after the end of all operations 
    if (stack.length === 1) {
        // if it left exact one element - return it as the result
        console.log(stack[0]);

    } else {
        // if there are more than one number - it means that there aren't too many operands
        console.log("Error: too many operands!");
    }
}
jansNotation([3, 4, '+']);          // 7
jansNotation([5, 3, 4, '*', '-']);  // -7
jansNotation([7, 33, 8, '-']);