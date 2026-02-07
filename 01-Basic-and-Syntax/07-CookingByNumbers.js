const CookingByNumbers = (number, ...operations) => {
    let input = Number(number);
    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                input = input / 2;
                break;
            case 'dice':
                input = Math.sqrt(input);
                break;
            case 'spice':
                input = input + 1;
                break;
            case 'bake':
                input = input * 3;
                break;
            case 'fillet':
                input = +(input * 0.8).toFixed(1);
                break;
        }
        console.log(input);
    }

}
CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');




/*
const CookingByNumbers = (startNum, ...commands) => {
    let num = Number(startNum);

    const actions = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => +(num * 0.8).toFixed(1),
    };
    
    commands.forEach(command => {
        num = actions[command](num);
        console.log(num);
    });

    
};

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');*/