/* const MagicMatrices = (matrix) => {
    const sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        const rowSum = matrix[i].reduce((a, b) => a + b, 0);
        if (rowSum !== sum) {
            return false;

        }
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum = colSum + matrix[j][i];

        }
        if (colSum !== sum) {
            return false;

        }
        
    }
    return true;
} */


const MagicMatrices = (matrix) => {
    const getSum = (arr) => arr.reduce((a, b) => a + b, 0);
    const targetSum = getSum(matrix[0]);
    for (let i = 0; i < matrix.length; i++) {
        if (getSum(matrix[i]) !== targetSum) {
            return false;
        }
        
    }
    for (let col = 0; col < matrix.length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }
    return true;
}
console.log(MagicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(MagicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(MagicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));