class Company {
    constructor() {
        this.departments = {}; //initialize the empty object

    }
    addEmployee(name, salary, position, department) {
        // explicitly check fo invalid inputs
        if (name === "" || name === undefined || name === null ||
            salary === "" || salary === undefined || salary === null ||
            position === "" || position === undefined || position === null ||
            department === "" || department === undefined || department === null ||
            salary < 0) {
            throw new Error("Invalid input!");
        }
        // if the department doesn't exist in our object yet create an emptyarray for it 
        if (this.departments[department] === undefined) {
            this.departments[department] = [];
        }
        // create the employee object and push it into the correct department array
        let newEmployee = {
            name: name,
            salary: Number(salary),
            position: position
        };
        this.departments[department].push(newEmployee);

        // retrun the success message
        return "New employee is hired. Name: " + name + ". Position: " + position;

    }
    bestDepartment() {
        let bestDeptName = "";
        let highestAvgSalary = -1;

        // loop through all departments to find the best average
        let allDepartments = Object.keys(this.departments);
        for (let i = 0; i < allDepartments.length; i++) {
            let currentDept = allDepartments[i];
            let employees = this.departments[currentDept];

            let totalSalary = 0;
            for (let j = 0; j < employees.length; j++) {
                totalSalary += employees[j].salary;
            }
            let avgSalary = totalSalary / employees.length;

            if (avgSalary > highestAvgSalary) {
                highestAvgSalary = avgSalary;
                bestDeptName = currentDept;
            }
        }
        // grab the employees of the winning department and sort them
        let bestEmployees = this.departments[bestDeptName];

        bestEmployees.sort(function(a, b) {
            // First criterion: sort by salary descending
             if (a.salary < b.salary) return 1;
            if (a.salary > b.salary) return -1;

            //second criterion if salaries are equal sort by name ascending
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        //build the final output string
        let result = "Best Department is: " + bestDeptName + "\n";
        result += "Average salary: " + highestAvgSalary.toFixed(2);

        for (let k = 0; k < bestEmployees.length; k++) {
            let emp = bestEmployees[k];
            result += "\n" + emp.name + " " + emp.salary + " " + emp.position;
        }
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());





/* class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].some(param => param === "" || param === undefined || param === null) || salary < 0) {
            throw new Error("Invalid input");
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary: Number(salary), position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;

    }
    bestDepartment() {
        let bestDept = '';
        let maxAvg = 0;

        for (const [deptName, employees] of Object.entries(this.departments)) {
            //.reduce() quickly sums up all the salaries in one line
            let avgSalary = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
            if (avgSalary > maxAvg) {
                maxAvg = avgSalary;
                bestDept = deptName;
            }
        }
        let bestEmployees = this.departments[bestDept];
        let result = `Best Department is: ${bestDept}\nAverage salary: ${maxAvg.toFixed(2)}`;
        bestEmployees.forEach(e => {
            result += `\n${e.name} ${e.salary} ${e.position}`;
        });
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment()); */