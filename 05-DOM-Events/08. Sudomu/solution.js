/* function solve() {

    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const inputs = Array.from(document.querySelectorAll('input'));
    const table = document.querySelector('table');
    const msg = document.querySelector('#check p');

    checkBtn.addEventListener('click', () => {
        //Break the flat array of inputs into a 3x3 matrix with values
        const matrix = [
            inputs.slice(0, 3).map(i => i.value),
            inputs.slice(3, 6).map(i => i.value),
            inputs.slice(6, 9).map(i => i.value)
        ];
        // method every returns true if all 3 iterations return true, 
        const isValid = matrix.every((row, index) => {
            // Collecting a column
            const col = matrix.map(r => r[index]);

            // Check the absence of duplicates in the line and column
            return new Set(row).size === 3 && new Set(col).size === 3; 
        });

        //Ternner Operators to Customize Styles
        table.style.border = isValid ? '2px solid green' : '2px solid red';
        msg.style.color = isValid ? 'green' : 'red';
        msg.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';

    });
    clearBtn.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
        table.style.border = 'none';
        msg.textContent = '';

    });
} */





function solve() {
    // find all elements
    let inputs = document.querySelectorAll('input');
    let checkBtn = document.querySelectorAll('button')[0];
    let clearBtn = document.querySelectorAll('button')[1];
    let table = document.querySelector('table');
    let message = document.querySelector('#check p');

    // logic of check
    checkBtn.addEventListener('click', function() {
        //Collecting values from input fields into a two-dimensional array (3 lines of element 3)
        let board = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];
        let isSolved = true;

        // check each line and each column
        for (let i = 0; i < 3; i++) {
            let row = board[i];
            let col = [board[0][i], board[1][i], board[2][i]];

            // Set automatically removes duplicates
            // if after creation of the Set the size is less than 3, it means that there were duplicates
            let uniqueInRow = new Set(row);
            let uniqueInCol = new Set(col);

            if (uniqueInRow.size !== 3 || uniqueInCol.size !== 3) {
                isSolved = false;
                break; // if we find a line or column with duplicates, we can stop checking

            }
        }
        // output the result depending on the isSolved flag
        if (isSolved) {
            table.style.border = '2px solid green';
            message.style.color = 'green';
            message.textContent = 'You solve it! Congratulations!';

        } else {
            table.style.border = '2px solid red';
            message.style.color = 'red';
            message.textContent = 'NOP! You are not done yet...';
        }
    });
    // logic of clear
    clearBtn.addEventListener('click', function() {
        // clear all inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';

        }
        // clear styles and message
        table.style.border = 'none';
        message.textContent = '';

    });
}