/* function create(words) {
   const content = document.getElementById('content');

   // forEachloop through the array of words. word - current word in the array
   words.forEach(word => {
      // create a new div element
      const div = document.createElement('div');
      const p = document.createElement('p');

      // Filling the content
      p.textContent = word;
      p.style.display = 'none'; // Hide the paragraph initially

      // p inside div
      div.appendChild(p);

      // Add event listener to the div
      div.addEventListener('click', () => {
         p.style.display = '';

      });
      // add to the page
      content.appendChild(div);
   });

} */






function create(words) {
   //find the main space where we we add everything
   let content = document.getElementById('content');

   // go through each word from array
   for (let i = 0; i < words.length; i++) {
      // create div and p element
      let div = document.createElement('div');
      let p = document.createElement('p');

      // save text in the paragraph and hide it
      p.textContent = words[i];
      p.style.display = 'none';

      // put paragraph in the div
      div.appendChild(p);

      // add event listener to the div
      div.addEventListener('click', function() {
         // When clicking, we make a paragraph visible
         p.style.display = 'block';
      });
      // add the div to the page
      content.appendChild(div);
   }


}