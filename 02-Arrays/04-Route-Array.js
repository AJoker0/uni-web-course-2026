const rotateArray = (array, rotationsCount) => {

    rotationsCount = rotationsCount % array.length; //when rotations exceed array length
    for (let i = 0; i < rotationsCount; i++) {
        const last = array.pop();
        array.unshift(last);

    }
    return array.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2)); 
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));





/* const rotateArray = (array, rotationsCount) => {
    for (let i = 0; i < rotationsCount; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
        

    }
    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15); */