class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false; //we use an underscore to hold the actual true/false value

        // manually create every single HTML element
        this.article = document.createElement('article');

        this.titleDiv = document.createElement('div');
        this.titleDiv.className = 'title';
        this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}`;

        this.toggleBtn = document.createElement('button');
        this.toggleBtn.innerHTML = `&#8505;`;
        this.titleDiv.appendChild(this.toggleBtn); // put the button inside the title
        
        this.infoDiv = document.createElement('div');
        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none'; // the info must be hidden by initially

        this.phoneSpan = document.createElement('span');
        this.phoneSpan.innerHTML = `&phone; ${this.phone}`;

        this.emailSpan = document.createElement('span');
        this.emailSpan.innerHTML = `&#9993; ${this.email}`;

        // assemble the tree
        this.infoDiv.appendChild(this.phoneSpan);
        this.infoDiv.appendChild(this.emailSpan);
        this.article.appendChild(this.titleDiv);
        this.article.appendChild(this.infoDiv);

        // add the click event to toggle visibility 
        this.toggleBtn.addEventListener('click', () => {
            if (this.infoDiv.style.display === 'none') {
                this.infoDiv.style.display = 'block';
            } else {
                this.infoDiv.style.display = 'none';
            }
        });
        
    }
    // the magic getter and setter 
        get online() {
            return this._online;
        }

        set online(value) {
            this._online = value;
            // whenever the value chenges , automatically update the DOM!
            if (this._online === true) {
                this.titleDiv.classList.add('online');
            } else {
                this.titleDiv.classList.remove('online');
            }
        }
        // render to the page
        render(id) {
            let container = document.getElementById(id);
            if (container) {
                container.appendChild(this.article); //apend our fully built article

            }
        }
}
let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 2 seconds, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);