function solution() {
    // 1. Parent Abstract Class
    class Employee {
        constructor(name, age) {
            // Check to simulate an abstract class (prevents direct instantiation)
            if (new.target === Employee) {
                throw new Error("Cannot instantiate an abstract class directly.");
            }
            
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            
            // Keeps track of the current task for the work() method
            this._currentTaskIndex = 0; 
        }

        work() {
            // Print the current task
            console.log(this.tasks[this._currentTaskIndex]);
            
            // Move to the next task, cycling back to 0 if at the end of the array
            this._currentTaskIndex = (this._currentTaskIndex + 1) % this.tasks.length;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    // 2. Junior Class
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            // Assign Junior specific tasks
            this.tasks = [
                `${this.name} is working on a simple task.`
            ];
        }
    }

    // 3. Senior Class
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            // Assign Senior specific tasks
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
        }
    }

    // 4. Manager Class
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            // Assign Manager specific tasks
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
        }

        // Override collectSalary to include the manager's dividend
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    // Return the revealing module
    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

    // Example input
    const classes = solution();
    const junior = new classes.Junior('Ivan', 25);

    junior.work();
    junior.work();

    junior.salary = 5811;
    junior.collectSalary();

    const senior = new classes.Senior('Alex', 31);

    senior.work();
    senior.work();
    senior.work();
    senior.work();

    senior.salary = 12050;
    senior.collectSalary();

    const manager = new classes.Manager('Tom', 55);

    manager.salary = 15000;
    manager.collectSalary();
    manager.dividend = 2500;
    manager.collectSalary();
