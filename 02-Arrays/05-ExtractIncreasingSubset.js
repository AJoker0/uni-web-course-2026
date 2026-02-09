const extractIncreasingSubset = (array) => {
    let result = [];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            result.push(array[i]);
            max = array[i];

        }

    }
    return result;
}

console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubset([1, 2, 3, 4]));
console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));


/* 
const extractIncreasingSubset = (array) => {
    if (array.length === 0) return [];

    let result = [];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement >= max) {
            result.push(currentElement);
            max = currentElement;
        }
    }
    return result;

}
console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubset([1, 2, 3, 4]));
console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));  */