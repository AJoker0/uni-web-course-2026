/* function attachEventsListeners() {
    // create dictionary with koefficients 
    // all values - is how many meters in one unit of measure
    const conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    // find button and add event listener
    document.getElementById('convert').addEventListener('click', () => {
        // get value and units
        const inputDistance = Number(document.getElementById('inputDistance').value);
        const inUnit = document.getElementById('inputUnits').value;
        const outUnit = document.getElementById('outputUnits').value;

        // multiply the input distance by the conversion rate to get distance in meters
        const inMeters = inputDistance * conversionRates[inUnit];

        // divide the distance in meters by the conversion rate of the output unit to get the result
        const result = inMeters / conversionRates[outUnit];

        // output the result
        document.getElementById('outputDistance').value = result;
    })
} */




function attachEventsListeners() {
    // find button and add event listener
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', function() {
        // count all that user input
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;
        // convert that we input in usual unit - meters
        let distanceInMeters = 0;

        switch (inputUnit) {
            case 'km': distanceInMeters = inputDistance * 1000; break;
            case 'm': distanceInMeters = inputDistance * 1; break;
            case 'cm': distanceInMeters = inputDistance * 0.01; break;
            case 'mm': distanceInMeters = inputDistance * 0.001; break;
            case 'mi': distanceInMeters = inputDistance * 1609.34; break;
            case 'yrd': distanceInMeters = inputDistance * 0.9144; break;
            case 'ft': distanceInMeters = inputDistance * 0.3048; break;
            case 'in': distanceInMeters = inputDistance * 0.0254; break;

        }
        // convert from meters to the output unit
        let result = 0;

        switch (outputUnit) {
            case 'km': result = distanceInMeters / 1000; break;
            case 'm': result = distanceInMeters / 1; break;
            case 'cm': result = distanceInMeters / 0.01; break;
            case 'mm': result = distanceInMeters / 0.001; break;
            case 'mi': result = distanceInMeters / 1609.34; break;
            case 'yrd': result = distanceInMeters / 0.9144; break;
            case 'ft': result = distanceInMeters / 0.3048; break;
            case 'in': result = distanceInMeters / 0.0254; break;
        }
        // output the result
        document.getElementById('outputDistance').value = result;
    })
}