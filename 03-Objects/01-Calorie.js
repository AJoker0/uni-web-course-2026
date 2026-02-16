/* const calories = (array) => {
    const calorieObject = {}; //create the place where to store the data

    for (let i = 0; i < array.length -1; i += 2) {
        const product = array[i]; //take the product name
        const calories = Number(array[i + 1]); //take the calories and convert to number
        calorieObject[product] = calories; //add to object

    }
    return calorieObject;

}

console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42', 'Bread'])); */



function solve(input) {
    // create empty object
    let obj = {};

    // loop through the input array with step 2 to get product and calories
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i]; // get product name
        let calories = Number(input[i + 1]); // get calories and convert to number
        
        obj[name] = calories;  // commit to object
    }
    console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42', 'Bread']);