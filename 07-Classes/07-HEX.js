class Hex {
    constructor(value) {
        //the constructor takes one parameter 'value'
        this.value = value;

    }
    valueOf() {
        // return the value property
        return this.value;
    }
    toString() {
        // convert the number to a hexadecimal string using base 16
        let hexString = this.value.toString(16).toUpperCase();
        //return it starting with "0x"
        return '0x' + hexString;
    }

    plus(number) {
        let newValue;
        // explicitly check if we are adding another Hex object or a regular number
        if (typeof number === 'object') {
            newValue = this.value + number.value;
        } else {
            newValue = this.value + number;
        }
        //return a completely new Hex object
        return new Hex(newValue);
    }

    minus(number) {
        let newValue;
        //same explicit check for subtraction
        if (typeof number === 'object') {
            newValue = this.value - number.value;
        } else {
            newValue = this.value - number;
        }
        return new Hex(newValue);
    }
    parse(string) {
        //convert the hex string back into a standard decimal number
        return parseInt(string, 16);
    }

    
}
let FF = new Hex(255);
console.log(FF.toString());

FF.valueOf() + 1 == 256; 

let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));


/* class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(number) {
        return new Hex(this.value + number);
    }
    minus(number) {
        return new Hex(this.value - number);
    }
    parse(string) {
        return parseInt(string, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());

FF.valueOf() + 1 == 256; 

let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA')); */