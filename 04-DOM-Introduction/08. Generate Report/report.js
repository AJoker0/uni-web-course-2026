/* function generateReport() {
    // search elements ouput and input
    const output = document.getElementById('output');
    // Convert NodeList checkboxes immediately into a real array of Array.from()
    const checkboxes = Array.from(document.querySelectorAll('thead th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    // count which columns we choose 
    // save object {name: "name", index: 0} just for ticked columns
    const selectedColumns = checkboxes
        .map((cb, index) => ({ name: cb.name, checked: cb.checked, index: index }))
        .filter(col => col.checked); // leave just ticked columns

    // loop through each row and form the object
    const result = rows.map(row => {
        const obj = {};
        // for each row we take data from selectedColumns
        selectedColumns.forEach(col => {
            // row.children[col.index] - this cell <td> with correct number
            obj[col.name] = row.children[col.index].textContent;
        })
        return obj;
    })
    // paste in otput 
    output.value = JSON.stringify(result, null, 2);
} */





function generateReport() {
    // search for all ticks in title of table
    let checkboxes = document.querySelectorAll('thead tr th input');

    // search for all rows with data (bode of table)
    let rows = document.querySelectorAll('tbody tr');

    // here we will save the result of our work
    let result = [];

    //start the loop for each row
    for (let i = 0; i < rows.length; i++) {
        // create the empty object for current worker
        let person = {};

        // get all the cells (td) for current row
        let cells = rows[i].children;

        // inside the  row we start the loop for each checkbox
        for (let j = 0; j < checkboxes.length; j++) {
            // if the checkbox is checked
            if (checkboxes[j].checked) {
                //take the name of the name of the checkbox 
                let propertyName = checkboxes[j].name;

                // take the text from the cell with the same index as checkbox
                let cellData = cells[j].textContent;

                //write it on object
                person[propertyName] = cellData;
            }
        }
        result.push(person);


    }
    document.getElementById('output').value = JSON.stringify(result, null, 2);
}