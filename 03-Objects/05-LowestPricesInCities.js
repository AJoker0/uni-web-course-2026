/* const lowestPricesInCities = (input) => {
    let result = {};
    for (const iterator of input) {
        let [town, product, price] = iterator.split(' | ');
        price = Number(price);
        if (!result[product]) {
            result[product] = {town, price};

        } else {
            if (result[product].price > price) {
                result[product] = {town, price};

            } 

        }

    }
    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);

    }

}
lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2", 
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 999",
    "New York | Burger | 10"
]); */

function solve(input) {
    // create empty object to store products
    let products = {};

    // loop throught each line of input
    for (let i = 0; i < input.length; i++) {
        // divide the line by " | "
        let splitData = input[i].split(' | ');
        let town = splitData[0];
        let product = splitData[1];
        let price = Number(splitData[2]); // convert price to number
        
        //ckeck: had we seen this product before?
        // if not, add it to the object
        if (!products.hasOwnProperty(product)) {
            products[product] = { price: price, town: town };
        } else { 
            // if we have seen the product, check the price 
            // if the new price is lower, update the price and town
            //if the price the same , do nothing (we keep the first town)
            if (price < products[product].price) {
                products[product] = { price: price, town: town };
            }

        }
    }
    // print the result
    for (let key in products) {
        console.log(`${key} -> ${products[key].price} (${products[key].town})`);
    }

}
solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);