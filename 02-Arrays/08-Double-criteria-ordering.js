const oderArray = (array) => {
    return array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    })
}

console.log(orderArray(['alpha', 'beta', 'gamma', ]))
console.log(orderArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
console.log(orderArray(['test', 'Deny', 'omen', 'Default']))