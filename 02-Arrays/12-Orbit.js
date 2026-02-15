function solveOrbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    //create cycle for lines (from up to down)
    for (let row = 0; row < height; row++) {
        //create cycle for columns for the current line
        let currentRow = [];
        //create cycle for columns (from left to right)
        for (let col = 0; col < width; col++) {
            // how long this cell is from the star by horizontal
            //Math.abs remove the negative sign
            let distanceX = Math.abs(col - x);
            // how long this cell is from the star by vertical
            let distanceY = Math.abs(row - y);
            // which distance is bigger - horizontal or vertical
            let value = Math.max(distanceX, distanceY) + 1;
            currentRow.push(value);
        }
        console.log(currentRow.join(' '));
    }
}
console.log("--- Test 1 ---");
solveOrbit([4, 4, 0, 0]);

console.log("\n--- Test 2 ---");
solveOrbit([5, 5, 2, 2]);

console.log("\n--- Test 3 ---");
solveOrbit([3, 3, 2, 2]);



/* const Orbit = (width, height, x, y) => {
    for (let row = 0; row < height; row++) {
        let rowArray = [];
        for (let col = 0; col < width; col++) {
            let diffX = Math.abs(col - x);
            let diffY = Math.abs(row - y);
            let value = Math.max(diffX, diffY) + 1;
            rowArray.push(value);
        }
        console.log(rowArray.join(' '));
    }

}
console.log("--- Test 1 ---");
Orbit(4, 4, 0, 0);

console.log("\n--- Test 2 ---");
Orbit(5, 5, 2, 2);

console.log("\n--- Test 3 ---");
Orbit(3, 3, 2, 2); */