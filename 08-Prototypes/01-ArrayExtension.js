/* (function solve() {
    // 1. last() - returns the last element
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    // 2. skip(n) - return a new array starting after index 'n'
    Array.prototype.skip = function (n) {
        let result = [];
        
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    // 3. take(n) - return a new array containing the first 'n' elements
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    // 4. sum() - adds all elements together
    Array.prototype.sum = function () {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this[i];
        }
        return total;
    };

    // 5. average() - returns the sum divided by the count
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})(); // The () at the end executes the code immediately!

let myArr = [1, 2, 3, 4, 5];
console.log(myArr.last());    // 5
console.log(myArr.skip(2));   // [3, 4, 5]
console.log(myArr.take(2));   // [1, 2]
console.log(myArr.sum());     // 15
console.log(myArr.average()); // 3 */




(function  solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n) {
        return this.slice(n);
    };
    Array.prototype.take = function(n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    };
    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
})();

let myArr = [1, 2, 3, 4, 5];
console.log(myArr.last());    // 5
console.log(myArr.skip(2));   // [3, 4, 5]
console.log(myArr.take(2));   // [1, 2]
console.log(myArr.sum());     // 15
console.log(myArr.average()); // 3