/* const heroicInventory = (input) => {
    // create an empty array to store the hero data
    let result = [];
    // loop through the input arrays and create hero objects
    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / '); // split the string into name, level and items
        level = Number(level); // convert level to number
        items = items ? items.split(', ') : []; // split items into an array, if there are any

        result.push({name, level, items}); // create a hero object and add it to the result array

    }
    console.log(JSON.stringify(result)); // convert the result array to JSON string
}
heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
heroicInventory([
    "Jake / 1000 / Gauss, HolidayGrenade"
]); */




function heroicInventory(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let heroData = input[i].split(' / ');

        let name = heroData[0];
        let level = Number(heroData[1]);
        let items = [];
        if (heroData.length > 2) {
            items = heroData[2].split(', ');

        } else {
            items = [];
        }
        let hero = {
            name: name,
            level: level,
            items: items
        };
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
heroicInventory([
    "Jake / 1000 / Gauss, HolidayGrenade"
]);