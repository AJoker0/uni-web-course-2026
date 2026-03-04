function manageJuiceFlavors(inputArray) {
    let juiceStorage = {}; // track new liquid
    let bottleStorage = {}; //tracks completed bottles
    let bottleOrder = []; // explicitly tracks the order bottles were created
    for (let i = 0; i < inputArray.length; i++) {
        // split the string into a name and quantity
        let parts = inputArray[i].split(' => ');
        let name = parts[0];
        let quantity = Number(parts[1]);

        // add raw juice to the storage
        if (juiceStorage[name] === undefined) {
            juiceStorage[name] = 0;
        }
        juiceStorage[name] += quantity;

        // check if we have enough to make a bottle (1000)
        if (juiceStorage[name] >= 1000) {
            // calculate how many bottles we can make
            let newBottles = Math.floor(juiceStorage[name] / 1000);
            // if we have never made this bottle before , record the order
            if (bottleStorage[name] === undefined) {
                bottleStorage[name] = 0;
                bottleOrder.push(name);
            }
            // add the bottles and keep only the leftover liquid
            bottleStorage[name] += newBottles;
            juiceStorage[name] = juiceStorage[name] % 1000;
        }
    }
    // print the result stricktly using our order tracker array
    for (let j = 0; j < bottleOrder.length; j++) {
        let juiceName = bottleOrder[j];
        console.log(juiceName + " => " + bottleStorage[juiceName]);
    }
}

let testInput = [
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
];

manageJuiceFlavors(testInput);




/* function manageJuiceFlavorsPro(inputArray) {
    let juices = new Map();
    let bottles = new Map();

    inputArray.forEach(entry => {
        // destructure the array directly
        let [name, quantityStr] = entry.split(' => ');
        let quantity = Number(quantityStr);
        
        // update the current juice volume
        let currentJuice = (juices.get(name) || 0) + quantity;

        if (currentJuice >= 1000) {
            let newBottles = Math.floor(currentJuice / 1000);

            // because 'bottles; is a Map, it will naturally remember which juice was inserted first 
            let existingBottles = bottles.get(name) || 0;
            bottles.set(name, existingBottles + newBottles);

            // leave the remainder
            currentJuice = currentJuice % 1000;

        }
        juices.set(name, currentJuice);
    });
    // iterating over a Map naturally follows insertion oder
    for (let [juiceName, bottleCount] of bottles) {
        console.log(`${juiceName} => ${bottleCount}`);
    }
}
let testInput = [
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
];

manageJuiceFlavorsPro(testInput); */