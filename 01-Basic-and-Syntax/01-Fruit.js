const fruitNeed = (system) => {
    const fruit = system[0];
    const weight = (system[1] / 1000).toFixed(2);
    const money = (weight * system[2]).toFixed(2);
    return `I need ${money} to buy ${weight} kilograms ${fruit}.`;
    
}



console.log(fruitNeed(['orange', 2500, 1.80]));
console.log(fruitNeed(['apple', 1563, 2.35]));