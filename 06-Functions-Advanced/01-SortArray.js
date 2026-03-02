const sortArray = (arr, order) => {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return arr.sort((a, b) => {
            return b - a;
        })
    }
    return arr;
};

// Test cases
console.log(sortArray([14, 7, 17, 6, 8], 'asc')); // [6, 7, 8, 14, 17]
console.log(sortArray([14, 7, 17, 6, 8], 'desc')); // [17, 14, 8, 7, 6]



/* function sortArray2(arr, order) {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b);
    } else {
        // Sort by descending
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortArray2([14, 7, 17, 6, 8], 'asc')); // [6, 7, 8, 14, 17]
console.log(sortArray2([14, 7, 17, 6, 8], 'desc')); // [17, 14, 8, 7, 6]
 */