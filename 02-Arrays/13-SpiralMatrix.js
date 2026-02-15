/* const SpiralMatrix = (rows, cols) => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);

    }
    let counter = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;

    // circle until we reach the middle of the matrix
    while (startRow <= endRow && startCol <= endCol) {
        // go right on the top wor
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++;

        }
        startRow++; // top border go down

        // go down (right border)
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter++;

        }
        endCol--;

        //go left (bottom border)
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = counter++;
            }
            endRow--;
        }
        // go up (left border)
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = counter++;

            }
            startCol++; //left border go right
        }

    }
    matrix.forEach(row => console.log(row.join(' ')));
}
SpiralMatrix(5, 5);
SpiralMatrix(3, 3); */




function spiralMatrix(rows, cols) {
    // create empty matrix
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    // define the boundaries of the matrix
    let topWall = 0; // top border
    let bottomWall = rows - 1; // bottom border
    let leftWall = 0; // left border
    let rightWall = cols - 1; // right border

    let counter = 1; // start counting from 1

    // loop until we reach the middle of the matrix
    while (topWall <= bottomWall && leftWall <= rightWall) {
        // go right (top border)
        for (let i = leftWall; i <= rightWall; i++) {
            matrix[topWall][i] = counter;
            counter++;
        } 
        topWall++; // move top wall down

        // go down (right border)
        for (let i = topWall; i <= bottomWall; i++) {
            matrix[i][rightWall] = counter;
            counter++;
        }
        rightWall--; // move right wall left

        // go left (bottom border)
        if (topWall <= bottomWall) { // check if we are still within the boundaries
            for (let i = rightWall; i >= leftWall; i--) {
                matrix[bottomWall][i] = counter;
                counter++;
            }
            bottomWall--; // move bottom wall up


        }
        // go up (left border)
        if (leftWall <= rightWall) { // check if we are still within the boundaries
            for (let i = bottomWall; i >= topWall; i--) {
                matrix[i][leftWall] = counter;
                counter++;

            }
            leftWall++; // move left wall right

        }

    }
    // print the matrix
    matrix.forEach(row => console.log(row.join(' ')));

}
console.log("--- Test 1 ---");
spiralMatrix(5, 5);

console.log("\n--- Test 2 ---");
spiralMatrix(3, 3);