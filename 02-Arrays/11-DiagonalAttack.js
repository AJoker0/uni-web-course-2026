function diagonalAttack(inputArray) {
    let matrix = inputArray.map(row => row.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainSum = mainSum + matrix[i][i];
        secondarySum = secondarySum + matrix[i][matrix.length - 1 - i];

    }
    if (mainSum === secondarySum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if ( i !== j && j !== matrix.length - 1- i) {
                    matrix[i][j] = mainSum;
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));

}
console.log("--- Test 1 ---");
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

console.log("\n--- Test 2 ---");
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);















/* const diagonalAttack = (matrix) => {
    const sum = matrix[0].reduce((a, b) => a + b, 0);
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum = leftDiagonalSum + matrix[i][i];
        rightDiagonalSum = rightDiagonalSum + matrix[i][matrix.length - 1 - i];

    }
    if (leftDiagonalSum === rightDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++){
                if (i === j || j === matrix.length - 1 - i) {
                    matrix[i][j] = leftDiagonalSum;

                }

            }

        }
        return matrix;

    }
    return matrix;

}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'].map(row => row.split(' ').map(Number)));
diagonalAttack(['1 1 1', '1 1 1', '1 1 0'].map(row => row.split(' ').map(Number))); */






