function solve() {
    // find necessary elements
    const container = document.getElementById('container');
    // get array of all inputs (Name, Hall, Ticket)
    const inputs = container.querySelectorAll('input');
    const addMovieBtn = container.querySelector('button');
    
    // find ul where we will add movies
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    const cleararchiveBtn = document.querySelector('#archive > button');

    // Processing of adding a film
    addMovieBtn.addEventListener('click', function(event) {
        event.preventDefault(); // stop refreshing page

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = inputs[2].value;

        // all fields must be filled and price must be a number
        if (!name || !hall || !price || isNaN(Number(price))) {
            return;
        }
        // create new li for movie
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;

        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');

        const strongPrice = document.createElement('strong');
        // set price with 2 digits after comma
        strongPrice.textContent = Number(price).toFixed(2);

        const ticketsInput = document.createElement('input');
        ticketsInput.placeholder = 'Tickets Sold';

        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';

        // Collect everything together
        div.appendChild(strongPrice);
        div.appendChild(ticketsInput);
        div.appendChild(archiveBtn);

        li.appendChild(span);
        li.appendChild(strongHall);
        li.appendChild(div);

        //add to the section "Moview on Screen"
        moviesUl.appendChild(li);

        // clear inputs
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        // Archiving processing (inside the appendix function)
        archiveBtn.addEventListener('click', function() {
            const ticketsSold = ticketsInput.value;

            // validation: sold tickets must be a number and not empty
            if (!ticketsSold || isNaN(Number(ticketsSold))) {
                return;
            }

            // calculate total amount for sold tickets
            const totalProfit = Number(price) * Number(ticketsSold);

            // change the structure of li: delete div with input and old button
            li.removeChild(div);
            // update text of strong
            strongHall.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

            // create new button Delete
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            li.appendChild(deleteBtn);

            // move film to archive section
            archiveUl.appendChild(li);

            // processing of deleting 
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
        });
    });
    // button clear archive
    cleararchiveBtn.addEventListener('click', function() {
        archiveUl.innerHTML = '';
    });
}