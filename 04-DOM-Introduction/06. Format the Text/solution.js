/* function solve() {
  // get the links on elemtns input and output
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  // take text and divide it on the array of sentences
  // .split('. ') - we split the text on sentences, using dot and space as separator
  // .filter(...) - removes empty "tails" if there was a period or spaces at the end

  let text = inputElement.value;
  let sentences = text.split('.').filter(s => s.trim().length > 0).map(s => s.trim() + '.'); // return the dot and remove the spaces

  // at first clean the output field (in case second time click )
  outputElement.innerHTML = '';

  // start the loop with step 3 (because we need to take 3 sentences at once)
  for (let i = 0; i < sentences.length; i += 3) {
    // take the part of array with 3 sentences (from i to i+3)
    let paragraphSentences = sentences.slice(i, i + 3).join(' ');

    // create new p element
    let p = document.createElement('p');
    p.textContent = paragraphSentences;

    // add ready paragraph to div
    outputElement.appendChild(p);
  }
} */


function solve() {
  // find the elemtns
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  // take the text and divide it on the array of sentences
  // filter(x => x.length > 0) removes empty elements that split creates
  let sentences = input.value.split('.').filter(x => x.length > 0);

  // clean the past result
  output.innerHTML = "";

  // loop with step 3, to take 3 sentences at once
  for (let i = 0; i < sentences.length; i += 3) {
    // call part with 3 sentences (slice) and join them in one string with dots (join)
    // join('.') - return dots between sentences, so in the end add the dot at the end of the last sentence
    let text = sentences.slice(i, i + 3).join('.') + '.';

    output.innerHTML += `<p>${text}</p>`; // add the paragraph to the output
  }

}