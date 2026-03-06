function createComputerHieratchy() {
    //BONUS: Base abstract class for common properties
    class Component {
        constructor(manufacturer) {
            if (new.target === Component) {
                throw new Error("Cannot instantiate an abstract class.");
            }
            this.manufacturer = manufacturer;
        }
    }
    // keyboard class
    class Keyboard extends Component {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    // monitor class
    class Monitor extends Component {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;

        }
    }
    //battery class
    class Battery extends Component {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    //computer abstract class
    class Computer extends Component {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            if (new.target === Computer) {
                throw new Error("Cannot instantiate an abstract class.");
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    //laptop class
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError("Passed object is not an instance of Battery class.");
            }
            this._battery = value;
        }
    }
    //desktop class
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;

        } 
        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError("Passed object is not an instance of Keyboard class.");
            }
            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError("Passed object is not an instance of Monitor class.");
            }
            this._monitor = value;
        }

    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

// Example input
let classes = createComputerHieratchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);