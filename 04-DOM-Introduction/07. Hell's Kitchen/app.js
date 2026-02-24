function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // get text from textarea and convert it to array
      //JSON.parse we need , because the input is in JSON format
      let input = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(input);

      // object to store all restaurants
      let restaurants = {};
      // loop through each line of input
      arr.forEach((line) => {
         let [name, workersStr] = line.split(' - ');
         let workersArray = workersStr.split(', ').map(w => {
            let [workerName, salary] = w.split(' ');
            return { name: workerName, salary: Number(salary) };
         });
         
         //if restaurant already exist, we add new workers, if not - we create new restaurant
         if (restaurants[name]) {
            restaurants[name].workers.push(...workersArray);
         } else {
            restaurants[name] = { workers: workersArray, avgSalary: 0, bestSalary: 0 };

         }
      });
      // calculate average and best salary for each restaurant
      let bestRestName = "";
      let maxAvgSalary = 0;

      // Object.keys(restaurants) give us list of names ["PizzaHut", "TheLake", ...]
      Object.keys(restaurants).forEach((name) => {
         let workers = restaurants[name].workers;

         // sum of all salaries / quantity of workers
         let totalSalary = workers.reduce((acc, curr) => acc + curr.salary, 0);
         restaurants[name].avgSalary = totalSalary / workers.length;
         //sort workers by salary (from big to small)
         workers.sort((a, b) => b.salary - a.salary);

         //the best salary - it is salary of the first worker, because we sorted them
         restaurants[name].bestSalary = workers[0].salary;

         // check: if this restaurant have better average salary, than the best until now, we save it as best
         if (restaurants[name].avgSalary > maxAvgSalary) {
            maxAvgSalary = restaurants[name].avgSalary;
            bestRestName = name;
         }
      });
      // form a conclusion for a better restaurant
      let best = restaurants[bestRestName];
      let resultRest = `Name: ${bestRestName} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

      // form a concusion for workers
      // map turns the array of objects into an array of lines, joins them with a space
      let resultWorkers = best.workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');

      // paste in HTML
      document.querySelector('#bestRestaurant p').textContent = resultRest;
      document.querySelector('#workers p').textContent = resultWorkers;
   }
}








/* 


function solve() {
   // find the button
   let button = document.querySelector('#btnSend');

   // when click start logic
   button.addEventListener('click', function () {
      //take the data
      let textarea = document.querySelector('#inputs textarea');
      let text = textarea.value;
      
      // transform like '["Name...", "Name..."]' in real array
      let inputArr = JSON.parse(text);

      // PROCESSING OF DATA
      let restaurants = {}; 

      // loop through each line of input
      for (let i = 0; i < inputArr.length; i++) {
         let parts = inputArr[i].split(' - ');
         let restaurantName = parts[0];
         let workersString = parts[1];

         let workersArray = workersString.split(', ');

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
         }

         // FIXED: was 'elngth', changed to 'length'
         for (let j = 0; j < workersArray.length; j++) {
            
            // FIXED: changed variable name to 'workerParts' (removed 's') to match usage below
            let workerParts = workersArray[j].split(' '); 
            
            let name = workerParts[0];
            let salary = Number(workerParts[1]); 

            restaurants[restaurantName].push({ name: name, salary: salary });
         }
      }

      // find the best restaurant
      let bestName = "";
      let bestAvgSalary = 0;

      let names = Object.keys(restaurants);

      for (let i = 0; i < names.length; i++) {
         let name = names[i];
         let workers = restaurants[name];

         let totalSalary = 0;
         
         for (let k = 0; k < workers.length; k++) {
            totalSalary = totalSalary + workers[k].salary;
         }
         
         let avgSalary = totalSalary / workers.length;

         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestName = name;
         }
      }

      // FINAL TRAINING OF THE BEST RESTAURANT DATA
      // Check if we found a restaurant (prevent error if input is empty)
      if (bestName) {
         let bestWorkers = restaurants[bestName];

         bestWorkers.sort(function(a, b) {
            return b.salary - a.salary;
         });

         let bestSalary = bestWorkers[0].salary;
         
         let outputRestaurant = `Name: ${bestName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

         let outputWorkersString = "";
         for (let i = 0; i < bestWorkers.length; i++) {
            outputWorkersString += `Name: ${bestWorkers[i].name} With Salary: ${bestWorkers[i].salary} `;
         }

         // OUTPUT IN HTML
         document.querySelector('#bestRestaurant p').textContent = outputRestaurant;
         document.querySelector('#workers p').textContent = outputWorkersString;
      }
   });
} */