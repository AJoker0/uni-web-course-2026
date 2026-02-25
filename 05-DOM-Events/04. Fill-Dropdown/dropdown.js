/* function addItem() {
    // get links of elements 
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    // checker: if one of the inputs is empty - we do not add anything
    if (textInput.value === '' || valueInput.value === '') return;

    // construction Option (text and value)
    const newOption = new Option(textInput.value, valueInput.value);

    // add the new option to the menu
    menu.appendChild(newOption);

    // clear the input fields
    textInput.value = '';
    valueInput.value = '';

} */




function addItem() {
    // find elements on the page
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    //crete new option element
    let option = document.createElement('option');

    // fill this by data from input fields
    option.textContent = textInput.value; // text that we see in the dropdown
    option.value = valueInput.value; // that sends to the server 

    // paste the ready option inside select (menu)
    menu.appendChild(option);

    // clear the input fields
    textInput.value = '';
    valueInput.value = '';
}