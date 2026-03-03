class List {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        return this; // returning 'this' allows for method chaining 
    }

    remove(index) {
        this._validate(index);
        this.list.splice(index, 1);
        return this;
    }

    get(index) {
        this._validate(index);
        return this.list[index];
    }

    get size() {
        return this.list.length;
    }
    _validate(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error('Index out of bounds');
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));






/* class List {
    constructor() {
        // we need an array to hold our numers
        this.collection = [];
    }
    add (element) {
        this.collection.push(element);

        //sort the array in ascending order every time a new number is added
        this.collection.sort(function(a, b) {
            return a - b;
        });
        //the instructions say this must return the class instance
        return this;
    }

    remove(index) {
        // check if the index is valid (not negative, and not out of bounds)
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1); //remove 1 element at the given index

        } else {
            throw new Error('Invalid index!');
        }
        return this;
    }
    get(index) {
        //same check as above
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        } else {
            throw new Error("Invalid index!");
        }
    }
    // the 'get' keyword makes this a property, not a method!
    // this allows us to call list.size instead of list.size()
    get size() {
        return this.collection.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1)); */