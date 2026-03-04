class Textbox {
    constructor(selector, regex) {
        //find all elements matching the selector
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._value = ''; // a private variable to hold the actual string

        //synchronize the initial value if elements exist 
        if (this._elements.length > 0) {
            this._value = this._elements[0].value;
        }

        // we must link the HTML input to our class property
        for (let i = 0; i < this._elements.length; i++) {
            let currentElement = this._elements[i];

            currentElement.addEventListener('input', (event) => {
                // by using an arrow function 'this' refers to the Textbox class 
                this.value = event.target.value;

            });
        }
    }
    //getter for elements
    get elements() {
        return this._elements;
    }
    //getter for value
    get value() {
        return this._value;
    }
    //setter for value
    set value(newValue) {
        this._value = newValue;

        // if the value property changes , instantly reflect it across ALL elements
        for (let i = 0; i < this._elements.length; i++) {
            this._elements[i].value = newValue;
        }
    }
    isValid() {
        //if the regex finds a match in our value it means it HAS invalid symbols
        let hasInvalid = this._invalidSymbols.test(this.value);
        if (hasInvalid === true) {
            return false;
        } else {
            return true;
        }
    }
}


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);


let inputs = document.getElementsByClassName('textbox');

for (let input of inputs) {
    input.addEventListener('click', function() {
        console.log("Current linked value is: " + textbox.value);
        console.log("Is it valid? " + textbox.isValid());
    });
}




