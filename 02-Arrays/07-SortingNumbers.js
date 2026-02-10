const sortNumbers = (array) => {
    array.sort((a, b) => a - b);
    let result = [];
    while (array.length > 0) {
        result.push(array.shift());
        if (array.length > 0) {
            result.push(array.pop());

        }
        
    }
    return result;
}
console.log(JSON.stringify(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])));
console.log(JSON.stringify(sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]))); 



/* const sortNumbers = (array) => {
    array.sort((a, b) => {
        if (a < b) {
            return -1;

        } else if (a > b) {
            return 1;
        }
        return 0;

    })  
    
    return array;

    
    
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]); */