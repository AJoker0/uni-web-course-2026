/* (function solve() {
    // ensureStart(str) - adds str to the beginning if not present 
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) !== 0) {
            return str + this;
        }
        return this.toString();
    } ;
    // ensureEnd(str) - adds str to the end if not present
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };
    // isEmpty() - checks if length is zero
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    // truncate(n) - shortens the string based on specific rules
    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString();
        if (n < 4) return ".".repeat(n);

        let lastSpace = this.toString().substring(0, n - 2).lastIndexOf(' ');
        if (lastSpace !== -1) {
            return this.substring(0, lastSpace) + "...";
        } else {
            return this.substring(0, n - 3) + "...";
        }
    };
    // format(string, ...params) - static method for placeholders 
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    };

})();

let str = 'my string';
str = str.ensureStart('my');       // 'my string' (already present)
str = str.ensureStart('hello ');   // 'hello my string'
str = str.truncate(16);            // 'hello my string' (length is 15)
str = str.truncate(14);            // 'hello my...' (split at space)
str = str.truncate(8);             // 'hello...'
str = str.truncate(4);             // 'h...'
str = str.truncate(2);             // '..'
console.log(str);

let formatted = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(formatted);            // 'The quick brown fox'

let missingParam = String.format('jumps {0} {1}', 'dog');
console.log(missingParam);         // 'jumps dog {1}' */






(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) return ".".repeat(n);
        if (this.length <+ n) return this.toString();

        const lastSpace = this.substring(0, n - 2).lastIndexOf(" ");
        return lastSpace !== -1 ? this.substring(0, lastSpace) + "..." : this.substring(0, n - 3) + "...";

    };
    // using regex to find all {index} patterns and replace them
    String.format = function (string, ...params) {
        return string.replace(/{(\d+)}/g, (match, group1) => {
            const index = Number(group1);
            return params[index] !== undefined ? params[index] : match;
        });
    };
})();

let str = 'my string';
str = str.ensureStart('my');       // 'my string' (already present)
str = str.ensureStart('hello ');   // 'hello my string'
str = str.truncate(16);            // 'hello my string' (length is 15)
str = str.truncate(14);            // 'hello my...' (split at space)
str = str.truncate(8);             // 'hello...'
str = str.truncate(4);             // 'h...'
str = str.truncate(2);             // '..'
console.log(str);

let formatted = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(formatted);            // 'The quick brown fox'

let missingParam = String.format('jumps {0} {1}', 'dog');
console.log(missingParam);         // 'jumps dog {1}'