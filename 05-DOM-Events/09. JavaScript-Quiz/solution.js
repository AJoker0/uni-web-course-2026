function solve() {
  // cretae create elements for store out state
  let rightAnswers = 0; // count how many correct answers we have
  let currentStep = 0; // count on which question we are now

  // array with correct answers
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ];

  // find all necessary elements
  const sections = document.querySelectorAll('section'); // all sections with questions
  const resultsContainer = document.querySelector('#results'); // Hidden block for results
  const resultsText = document.querySelector('#results h1'); //// Title, where we will write the result
  const answers = document.querySelectorAll('.quiz-answer'); // all answer blocks

  // add event listener to each answer block
  answers.forEach(answer => {
    answer.addEventListener('click', function(event) {
      // get text of the answer that we click
      // use .trim() to remove extra spaces
      const selectedText = event.currentTarget.textContent.trim();

      // if answer the same with right for current step - we increase the count of right answers
      if (selectedText === correctAnswers[currentStep]) {
        rightAnswers++;
      }

      // hide current section with question
      sections[currentStep].style.display = 'none';

      // go to next step
      currentStep++;

      // if we have more questions - we show next section
      if (currentStep < sections.length) {
        sections[currentStep].style.display = 'block';
      } else {
        // questions are over - we show the result
        resultsContainer.style.display = 'block';

        // ouput final text depending on how many right answers we have
        if (rightAnswers === 3) {
          resultsText.textContent = "You are recognized as top JavaScript fan!";
        } else {
          resultsText.textContent = `You have ${rightAnswers} right answers`;
        }
      }
    });
  });
}
