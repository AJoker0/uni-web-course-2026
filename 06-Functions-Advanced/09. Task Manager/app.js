function solve() {
    // find all neccessary input fields and main button
    const taskInput = document.getElementById('task');
    const descInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add');

    // find all columns where we will add tasks 
    // document.querySelectorAll('section') return array of all 4 columns 
    // [1] this column Open, [2] In Progress, [3] Complete
    // we need second div inside each of them
    const openSection = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const progressSection = document.getElementById('in-progress'); 
    const completeSection = document.querySelectorAll('section')[3].querySelectorAll('div')[1];


    // add event listener to main button
    addButton.addEventListener('click', function(event) {
        // stop refreshing page
        event.preventDefault();

        // check if at least one of fields is empty - just leave from function 
        if (!taskInput.value || !descInput.value || !dateInput.value) {
            return;
        }
        // create new card (article)
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = taskInput.value;

        const pDesc = document.createElement('p');
        pDesc.textContent = 'Description: ' + descInput.value;

        const pDate = document.createElement('p');
        pDate.textContent = 'Due Date: ' + dateInput.value;

        // create container for button
        const flexDiv = document.createElement('div');
        flexDiv.className = 'flex';
        // create buttons
        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.textContent = 'Delete';

        // add everything to card like matreshka 
        flexDiv.appendChild(startBtn);
        flexDiv.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(flexDiv);

        // add card to Open section
        openSection.appendChild(article);

        // clear inputs after adding task
        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';

        // logic for button creation

        // btn delete - just remove card from any section
        deleteBtn.addEventListener('click', function() {
            article.remove();
        });

        // btn start
        startBtn.addEventListener('click', function() {
            // methid appenChild : if element already exist in DOM - it will be just moved to new place, not created new one
            progressSection.appendChild(article);

            // we dont need already btn start so delete it 
            startBtn.remove();
            
            // but we need btn finish - create it
            const finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';

            // add Finish inside the same div where leave Delete 
            flexDiv.appendChild(finishBtn);

            // logic for btn finish
            finishBtn.addEventListener('click', function() {
                // move card ti final column
                completeSection.appendChild(article);

                flexDiv.remove();
            });
        });
    });

}