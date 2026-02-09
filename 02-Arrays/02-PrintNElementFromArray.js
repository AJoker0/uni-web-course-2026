const NElement = (array, n) => {
    let result = [];

    for (let i = 0; i < array.length; i = i + n) {
        result.push(array[i]);
    }
    return result;
}



console.log(NElement(['5', '20', '31', '4', '20'], 2));
console.log(NElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(NElement(['1', '2', '3', '4', '5'], 6));



/*const NElement = (array, n) => {
   console.log(array.slice(0, n).join('\n'));

}*/
