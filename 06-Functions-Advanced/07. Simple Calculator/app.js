function calculator() {
    // this variables live inside the closure
    // they will save the links on real HTML elements
    let input1;
    let input2;
    let resultOutput;

    return {
        // method init call one time on start
        init: function(selector1, selector2, resultSelector) {
            input1 = document.querySelector(selector1);
            input2 = document.querySelector(selector2);
            resultOutput = document.querySelector(resultSelector);
        },

        // Addition method
        add: function() {
            //.value always return string so we need to convert it to number
            let val1 = Number(input1.value);
            let val2 = Number(input2.value);
            resultOutput.value = val1 + val2;
        },

        // Subtraction method
        subtract: function() {
            let val1 = Number(input1.value);
            let val2 = Number(input2.value);
            resultOutput.value = val1 - val2;
        }
    };
}
const calculate = calculator();

calculate.init('#num1', '#num2', '#result');




