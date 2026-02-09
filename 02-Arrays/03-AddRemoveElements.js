/* const addOrRemoveElements = (array) => {
    let result = [];

    for (let i = 1; i <=array.length; i++) {
        if (array[i - 1] === 'add') {
            result.push(i);
        }
        if (array[i - 1] === 'remove') {
            result.pop();
        }

    }
    if (result.length === 0) {
        return 'Empty';

    }
    return result.join('\n');

}
console.log(addOrRemoveElements(['add', 'add', 'add', 'add']));
console.log(addOrRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addOrRemoveElements(['remove', 'remove', 'remove'])); */

const addOrRemoveElements = (array) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = i + 1;
        let command = array[i];

        if (command === 'add') {
            result.push(currentNumber);

        } else if (command === 'remove') {
            result.pop();
        }
    }
    if (result.length === 0) {
        return 'Empty';

    } else {
        return result.join('\n');
    }
}
console.log(addOrRemoveElements(['add', 'add', 'add', 'add']));
console.log(addOrRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addOrRemoveElements(['remove', 'remove', 'remove'])); 