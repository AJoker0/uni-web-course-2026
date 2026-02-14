function solveTicTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currentPlayer = 'X';
    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i].trim().split(/\s+/).map(Number);
        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        //make the move
        dashboard[row][col] = currentPlayer;
        //check for win
        if (checkWin(dashboard, currentPlayer)) {
            console.log(`Player ${currentPlayer} wins!`);
            printDashboard(dashboard);
            return;
        }
        if (!dashboard.flat().includes(false)) {
            console.log("The game ended! Nobody wins :(");
            printDashboard(dashboard);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    function printDashboard(board) {
        board.forEach(row => {
            console.log(row.join('\t'));

        });
    }
    function checkWin(board, marker) {
        // ckeck rows
        for (let r = 0; r < 3; r++) {
            if (board[r][0] === marker && board[r][1] === marker && board[r][2] === marker) return true;

        }
        // check columns
        for (let c = 0; c < 3; c++) {
            if (board[0][c] === marker && board[1][c] === marker && board[2][c] === marker) return true;

        }
        //check diagonals
        if (board[0][0] === marker && board[1][1] === marker && board[2][2] === marker) return true;
        if (board[0][2] === marker && board[1][1] === marker && board[2][0] === marker) return true;
        return false;
    }


}




console.log("--- Test 1 ---");
solveTicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", " 2 2", "2 1", "0 0"]);

console.log("\n--- Test 2 ---");
solveTicTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", " 1 2", "2 2", "2 1"]);

console.log("\n--- Test 3 ---");
solveTicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", " 2 1", "2 2", "0 0"]);







/* const TicTacToe = (board) => {
    const checkWin = (player) => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }

        }
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
                return true;

            }

        }
        // Check diagonals
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;

        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        return false;

    }
    if (checkWin('X')) {
        return 'X wins';
    }
    if (checkWin('O')) {
        return 'O wins';
    }
    return 'Draw';
} */