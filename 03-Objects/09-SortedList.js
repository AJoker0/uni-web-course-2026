const createSortedList = () => {
    let list = [];
    return {
        add: (num) => {
            list.push(num);
            list.sort((a, b) => a - b);

        },
        remove: (index) => {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);

            }

        },
        get: (index) => {
            if (index >= 0 && index < list.length) {
                return list[index];

            }

        },
        size: () => list.length

    }

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));




/* class List {
    constructor() {
        // Create an array inside the specimen of the class
        this.arr = [];
        // the size we can hold like property and change manually 
        this.size = 0;
    }
    add(element) {
        this.arr.push(element);
        // sort by increase 
        this.arr.sort((a, b) => a - b);
        //update the size 
        this.size++;

    }
    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}
function createSortedList() {
    return new List();
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1)); */







