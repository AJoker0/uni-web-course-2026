/* function manageTickets(ticketDescriptions, sortingCriterion) {
    // define the Ticket class inside the function or globally 
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let ticketsArray = [];

    // parse the input array of strings
    for (let desc of ticketDescriptions) {
        // split the string by the pipe character '|'
        let [destName, priceStr, statusStr] = desc.split('|');

        // instantiate a new Ticket object and push it to our array
        ticketsArray.push(new Ticket(destName, priceStr, statusStr));
    }
    // Sort the array based on the sortingCriterion
    ticketsArray.sort((a, b) => {
        if (sortingCriterion === 'price') {
            //Numeric sort for price
            return a.price - b.price;
        } else {
            // Alphabetic sort for destination and status
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        }
    });
    //return the sorted array of objects
    return ticketsArray;
}

let input1 = [
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'
];

console.log(manageTickets(input1, 'destination')); */


function manageTickets(ticketDescriptions, sortingCriterion) {
    // define the class
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price); //turn the string price into a real number
            this.status = status;

        }
    }
    let ticketsArray = [];

    // use a classic 'for' loop to go through the array
    for (let i = 0; i < ticketDescriptions.length; i++) {
        let currentString = ticketDescriptions[i];
        // split the string into a standard array of 3 parts
        let parts = currentString.split('|');

        let dest = parts[0]; // the first part is the destination
        let price = parts[1]; // the second part is the price
        let stat = parts[2]; //the third part is the status

        //create the ticket object and put it in our main array
        let myTicket = new Ticket(dest, price, stat);
        ticketsArray.push(myTicket);
    }
    // sort using explicit greater-than / less-than logic
    ticketsArray.sort(function(ticketA, ticketB) {
        // get the specific value we are sorting by (destination , price or status)
        let valueA = ticketA[sortingCriterion];
        let valueB = ticketB[sortingCriterion];

        //if A is less than B, it should come first (return -1)
        if (valueA < valueB) {
            return -1;

        } 
        // if A is greater than B, it should come after (return 1)
        if (valueA > valueB) {
            return 1;

        }
        //if they are exactly the same don't move them (return 0)
        return 0;

    });
    return ticketsArray;
}

// The array of ticket strings
let sampleInput = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

// Test 1: Sorting by destination
console.log("--- Sorted by Destination ---");
console.log(manageTickets(sampleInput, 'destination'));

// Test 2: Sorting by status
console.log("--- Sorted by Status ---");
console.log(manageTickets(sampleInput, 'status'));