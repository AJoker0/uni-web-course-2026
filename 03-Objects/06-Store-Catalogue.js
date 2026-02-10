const storeCatalogue = (arr) => {
    
    const sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let currentLetter = '';
    for (const item of sortedArr) {
        const [product, price] = item.split(' : ');
        
        if (product[0] !== currentLetter) {
            currentLetter = product[0];
            console.log(currentLetter);

        }
        console.log(`  ${product}: ${price}`);
    }
    

}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
storeCatalogue(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);


/* const storeCatalogue = (arr) => {
    const sortedArr = arr.sort((a, b) => a.localeCompare(b));

    let currentLetter = '';
    for (let item of sortedArr) {
        let [product, price] = item.split(' : ');

        if (product[0] !== currentLetter) {
            currentLetter = product[0];
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${price}`);
    }
}
storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
storeCatalogue(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);
 */