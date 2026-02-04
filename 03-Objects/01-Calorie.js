const calories = (array) => {
    const calorieObject = {}; //create the place where to store the data

    for (let i = 0; i < array.length -1; i += 2) {
        const product = array[i]; //take the product name
        const calories = Number(array[i + 1]); //take the calories and convert to number
        calorieObject[product] = calories; //add to object

    }
    return calorieObject;

}

console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42', 'Bread']));