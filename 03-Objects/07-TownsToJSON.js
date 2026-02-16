/* const townToJSON = (towns) => {

    console.log(JSON.stringify(towns.map(t => {
        const [name, latitude, longitude] = t.split(' | ');
        return {
            Town: name,
            Latitude: Number(latitude),
            Longitude: Number(longitude),

        };

    })));

}
townToJSON([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]); */

function townsToJSON(input) {
    // divide title (1 line)
    //input.shift() take first line from array and remove it from the array
    // .split('|') cut the line by " | "
    // .filter(...) remove empty elements, which are created by the split
    // .map(...) remove extra spaces across words 
    let keys = input.shift().split('|').filter(x => x !== "").map(x => x.trim());

    // create an array to store the result
    let result = [];
    // loop through the rest of the line (towns)
    for (let row of input) {
        // the same clear the line from sticks and extra spaces
        let values = row.split('|').filter(x => x !== "").map(x => x.trim());
        // create an object
        // values[0] it is the name of the town
        // values[1] it is the latitude, convert to number
        // values[2] it is the longitude, convert to number
        let townObject = {
            [keys[0]]: values[0], //town

            // Number(values[1]) - convert to number
            // .toFixed(2) - round to 2 digits after the decimal point
            // Number(...) - convert back to number, because toFixed returns a string
            [keys[1]]: Number(Number(values[1]).toFixed(2)),
            [keys[2]]: Number(Number(values[2]).toFixed(2))

        }
        // put the object in the result array
        result.push(townObject);
    }
    // print the result as JSON string
    console.log(JSON.stringify(result));
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);