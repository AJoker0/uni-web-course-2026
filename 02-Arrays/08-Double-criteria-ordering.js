/*  const orderArray = (array) => {
    array.sort((a, b) => {
        let lengthComparison = a.length - b.length;
        if (lengthComparison !== 0) {
            return lengthComparison;

        } else {
            return a.localeCompare(b);
        } 
    });
    return array;
} 
console.log(orderArray(['alpha', 'beta', 'gamma', ]))
console.log(orderArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
console.log(orderArray(['test', 'Deny', 'omen', 'Default']))
 */


const orderArray = (array) => {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return array;
}
console.log(orderArray(['alpha', 'beta', 'gamma', ]))
console.log(orderArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
console.log(orderArray(['test', 'Deny', 'omen', 'Default']))