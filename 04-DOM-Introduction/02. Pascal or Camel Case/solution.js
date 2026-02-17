/* function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  if (currentCase === 'Pascal Case') {
    let result = input.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');
    document.getElementById('result').textContent = result;

  } else if (currentCase === 'Camel Case') {
    let result = input.split(' ').map((x, i) => {
      if (i === 0) {
        return x.toLowerCase();

      } else {
        return x[0].toUpperCase() + x.slice(1).toLowerCase();

      }

    }).join('');
    document.getElementById('result').textContent = result;

  }

} */


  function solve() {
    // get the input value 
    // we turn  text right away into little letters (.toLowerCase()), to remvoe the chaos "seconD"
    let text = document.getElementById('text').value.toLowerCase();
    let namingConvention = document.getElementById('naming-convention').value;

    // divide text on the array of words
    let words = text.split(' ');

    // variable to store the result
    let result = '';

    // check which style chose user
    if (namingConvention === 'Camel Case') {
      // Camel Case: first word is with small letter, the rest with big letter
      for (let i = 0; i < words.length; i++) {
        if (i === 0) {
          // first word with small letter
          result += words[i];

        } else {
          // the rest (first letter big, the rest small)
          // words[i][0]  - first letter of the word
          // .slice(1) - the rest of the word, starting from the second letter
          result += words[i][0].toUpperCase() + words[i].slice(1);
        }
      }
    } else if (namingConvention === "Pascal Case") {
      // Pascal Case: all words with big letter
      for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);

      }
    } else {
      // if the user choose invalid naming convention, print error message
      result = "Error!";

    }
    document.getElementById('result').textContent = result;
  }