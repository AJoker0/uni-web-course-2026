/* function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');
    const resultField = document.getElementById('result');
    const inputField = document.getElementById('input');

    // configuration of options (we need it for no duplicate code when we create elements)
    const options = [
        { title: 'Binary', value: 'binary' },
        { title: 'Hexadecimal', value: 'hexadecimal' }
    ];
    // add options by loop 
    options.forEach(option => {
        const element = document.createElement('option');
        element.textContent = option.title;
        element.value = option.value;
        selectMenuTo.appendChild(element);
    });
    // key = value from menu, value = function for convert
    const converters = {
        'binary': (num) => num.toString(2),
        'hexadecimal': (num) => num.toString(16).toUpperCase()
    };

    // clicker event 
    document.querySelector('button').addEventListener('click', () => {
        const number = Number(inputField.value);
        const selectedMode = selectMenuTo.value;

        // if we have such converter, we use it
        if (converters[selectedMode]) {
            resultField.value = converters[selectedMode](number);
        }
    });
} */






function solve() {
    // MENU SETTING UP (Add selection points)
    let selectMenuTo = document.getElementById('selectMenuTo');

    // create option Binary
    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    // create option Hexadecimal
    let hexOption = document.createElement('option');
    hexOption.textContent = 'Hexadecimal';
    hexOption.value = 'hexadecimal';

    // add options to menu
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexOption);

    // button logic
    // find the button (usually we have only one button, so we can search just for tag
    document.querySelector('button').addEventListener('click', function() {
        // take the number from input field 
        let numberInput = document.getElementById('input');
        let number = Number(numberInput.value);

        // look what user has selected in menu
        let result = '';

        if (selectMenuTo.value === 'binary') {
            // .toString(2) - convert number to binary
            result = number.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            // .toString(16) - convert number to hexadecimal
            // .toUpperCase() - make all letters in uppercase (for hexadecimal)
            result = number.toString(16).toUpperCase();
        }
        // output the result
        document.getElementById('result').value = result;

    });
    
}