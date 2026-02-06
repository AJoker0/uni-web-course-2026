const RoadRadar = (speed, area) => {
    let limit = 0;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;

    }
    if (speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`;

    } else {
        const difference = speed - limit;
        let status = '';
        if (difference <= 20) {
            status = 'speeding';

        } else if (difference <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';

        } 
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;

    }

}
console.log(RoadRadar(40, 'city'));
console.log(RoadRadar(21, 'residential'));
console.log(RoadRadar(120, 'interstate'));
console.log(RoadRadar(200, 'motorway'));


/*const RoadRadar = (speed, area) => {
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };
    const limit  = limits[area];
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }
    const difference = speed - limit;
    let status = '';

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

}

RoadRadar(40, 'city');
RoadRadar(21, 'residential');
RoadRadar(120, 'interstate');
RoadRadar(200, 'motorway');*/