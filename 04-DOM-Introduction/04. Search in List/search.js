/* function search() {
   const list = document.querySelectorAll("ul#towns li");

   let input = document.getElementById("searchText").value;

   let result = document.getElementById("result");
   let matches = 0;
   for (let li of list) {
      li.computedStyleMap.fontWeight = "normal";
      li.computedStyleMap.textDecoration = "none";

      if (li.textContent.includes(input)) {
         li.computedStyleMap.fontWeight = "bold";
         li.computedStyleMap.textDecoration = "underline";

         matches++;
      }
   }
   result.textContent = `${matches} matches found`;
} */



function search() {
   //take all cities in the list
   let cities = document.querySelectorAll("#towns li");

   //take the input value
   let input = document.getElementById("searchText").value;

   //variable to count matches
   let matches = 0;

   // loop through all cities
   for (let li of cities) {
      //reset the style of the city
      li.style.fontWeight = "";
      li.style.textDecoration = "";

      //check if the city includes the input value
      if (li.textContent.includes(input)) {
         //if it includes - make it bold and underlined
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";

         //increase the matches count
         matches++;
      }
   }
   result.textContent = `${matches} matches found`;
}