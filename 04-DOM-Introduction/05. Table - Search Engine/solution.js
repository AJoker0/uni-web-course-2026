/* function solve() {
   // get the input value
   let input = document.getElementById('searchField');
   let text = input.value.toLowerCase();

   // take all rows from the table
   let rows = document.querySelectorAll('tbody tr');

   // clean the input field
   input.value = '';

   // loop through all rows
   for (let row of rows) {
      // at first delete class select (reset previous search)
      row.classList.remove('select');

      // if text have been included and it is inside the row 
      if (text !== "" && row.textContent.toLowerCase().includes(text)) {
         // add class select to the row
         row.classList.add('select');
      }
   }
} */



function solve() {
   // find the button
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   // inside function, which will be called just after click 
   function onClick() {
      let input = document.getElementById('searchField');
      let text = input.value.toLowerCase();
      let rows = document.querySelectorAll('tbody tr');

      input.value = '';

      for (let row of rows) {
         row.classList.remove('select');

         if (text !== "" && row.textContent.toLowerCase().includes(text)) {
            row.classList.add('select');
         }
      }


   }
}