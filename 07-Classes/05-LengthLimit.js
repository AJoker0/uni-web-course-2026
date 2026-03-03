/* class Stringer {
    constructor(String, length) {
        this.innerString = String;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        //the length property should not fall below 0
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        // If the length of the string is greater than the length property, we truncate
        if (this.innerString.length > this.innerLength) {
            // cut the string from index 0 up to the innerLength then append the 3 dots
            return this.innerString.slice(0, this.innerLength) + '...';
        }
        // if we length property is exactly 0, slice(0, 0) handles it nicely and return '' + '...'
        // otherwise, return the original string exactly as it is initialized
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Expected: Test

test.decrease(3);
console.log(test.toString()); // Expected: Te...

test.decrease(5);
console.log(test.toString()); // Expected: ...

test.increase(4);
console.log(test.toString()); // Expected: Test */



class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        //explicitly writing out the math instead of using +=
        this.innerLength = this.innerLength + length;
    }

    decrease(length) {
        //explicitly writing out the math instead of using -=
        this.innerLength = this.innerLength - length;

        // the length property should not fall below 0
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        //scenario 1: if the length property is exactly 0, just return 3 dots
        if (this.innerLength === 0) {
            return "...";
        }
        // scenario 2: if the length of the string is greater than the length property, we must cut it
        if (this.innerString.length > this.innerLength) {
            //substring(start, end) grabs characters from index 0 up to your limit 
            let cutString = this.innerString.substring(0, this.innerLength);

            // add the 3 dots after the truncation is done
            return cutString + "...";
        }
        // scenario 3: if its not 0 and it doesnt need to be cut just return the normal string
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Expected: Test

test.decrease(3);
console.log(test.toString()); // Expected: Te...

test.decrease(5);
console.log(test.toString()); // Expected: ...

test.increase(4);
console.log(test.toString()); // Expected: Test