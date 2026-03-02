/* function solution() {
    // initialize our inventory
    const inventory = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    // create a recipe book
    // The order of the keys here is important, since by condition we must 
  // check the lack of ingredients in the order of their appearance in the recipe.
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
  };

  // return the manager function that has access to the inventory and recipes
  return function (instruction) {
    // Breaking the line of the command into parts.
    const [command, item, quantityStr] = instruction.split(' ');
    const quantity = Number(quantityStr);

    if (command === 'restock') {
        inventory[item] += quantity;
        return 'Success';
    }

    if (command === 'prepare') {
        const recipe = recipes[item];

        // Check if we have enough ingredients for the recipe
        // use Object.entries to go through the receipe at that order at what they are defined in the recipe book
        for (const [ingredient, requiredPerItem] of Object.entries(recipe)) {
            const totalRequired = requiredPerItem * quantity;
            if (inventory[ingredient] < totalRequired) {
                // if we don't have enough of the ingredient, return an error message
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        // cooking. If we get here, then the test was successfully passed.
        // now we can clear the ingredients from the inventory
        for (const [ingredient, requiredPerItem] of Object.entries(recipe)) {
            inventory[ingredient] -= requiredPerItem * quantity;
        }
        return 'Success';
    }
    if (command === 'report') {
        return `protein=${inventory.protein} carbohydrate=${inventory.carbohydrate} fat=${inventory.fat} flavour=${inventory.flavour}`;

    }
  };

}

let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10"));  // Success
console.log(manager("prepare apple 1"));     // Success
console.log(manager("restock fat 10"));      // Success
console.log(manager("prepare burger 1"));    // Success
console.log(manager("report")); */



function solution() {
    // initialize our inventory
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    // return the function 
    return function (commandString) {
        // Breaking the incoming line into words by space
        // for example "prepare apple 2" changes to array ['prepare', 'apple', '2']
        let parts = commandString.split(' ');
        
        let action = parts[0]; // action (restock, prepare, report)
        let item = parts[1]; //item (protein, carbohydrate, fat, flavour or recipe)
        let quantity = Number(parts[2]); // quantity (number)

        // logic for report
        if (action === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;

        }

        // logic for restock
        if (action === 'restock') {
            // add quantity to exact item in stock
            stock[item] = stock[item] + quantity;
            return 'Success';
        }
        // logic for prepare
        if (action === 'prepare') {
            // We describe each dish manually, strictly in the order of conditions.
            if (item === 'apple') {
                // check if we have enough ingredients for the recipe (1 carb 2 flavour)
                if (stock.carbohydrate < 1 * quantity) return 'Error: not enough carbohydrate in stock';
                if (stock.flavour < 2 * quantity) return 'Error: not enough flavour in stock';

                // If we've made it this far, that means you have everything you need. Let's get it out of stock!
                stock.carbohydrate -= 1 * quantity;
                stock.flavour -= 2 * quantity;
                return 'Success';
            }

            if (item === 'lemonade') {
                // (10 carb 20 flavour)
                if (stock.carbohydrate < 10 * quantity) return 'Error: not enough carbohydrate in stock';
                if (stock.flavour < 20 * quantity) return 'Error: not enough flavour in stock';

                stock.carbohydrate -= 10 * quantity;
                stock.flavour -= 20 * quantity;
                return 'Success';
            }

            if (item === 'burger') {
                // (5 carb 7 fat 3 flavour)
                if (stock.carbohydrate < 5 * quantity) return 'Error: not enough carbohydrate in stock';
                if (stock.fat < 7 * quantity) return 'Error: not enough fat in stock';
                if (stock.flavour < 3 * quantity) return 'Error: not enough flavour in stock';

                stock.carbohydrate -= 5 * quantity;
                stock.fat -= 7 * quantity;
                stock.flavour -= 3 * quantity;
                return 'Success';

            }

            if (item === 'eggs') {
                // (5 protein 1 fat 1 flavour)
                if (stock.protein < 5 * quantity) return 'Error: not enough protein in stock';
                if (stock.fat < 1 * quantity) return 'Error: not enough fat in stock';
                if (stock.flavour < 1 * quantity) return 'Error: not enough flavour in stock';

                stock.protein -= 5 * quantity;
                stock.fat -= 1 * quantity;
                stock.flavour -= 1 * quantity;
                return 'Success';

            }


            if (item === 'turkey') {
                // (10 protein 10 carb 10 fat 10 flavour)
                if (stock.protein < 10 * quantity) return 'Error: not enough protein in stock';
                if (stock.carbohydrate < 10 * quantity) return  'Error: not enough carbohydrate in stock';
                if (stock.fat < 10 * quantity) return 'Error: not enough fat in stock';
                if (stock.flavour < 10 * quantity) return 'Error: not enough flavour in stock';
                
                stock.protein -= 10 * quantity;
                stock.carbohydrate -= 10 * quantity;
                stock.fat -= 10 * quantity;
                stock.flavour -= 10 * quantity;
                return 'Success';
            }
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10"));  // Success
console.log(manager("prepare apple 1"));     // Success
console.log(manager("restock fat 10"));      // Success
console.log(manager("prepare burger 1"));    // Success
console.log(manager("report"));