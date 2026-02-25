/* function attachEventsListeners() {

    // We collect all the inputs in the object for convenience
    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')

    };
    //  coeficients for converting (relatively 1 day)
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    // universal function convertation 
    function convert(value, unit) {
        // at first we transform the value to days, 
        const days = value / ratios[unit];

        // then we fill other rows
        inputs.days.value = days;
        inputs.hours.value = days * ratios.hours;
        inputs.minutes.value = days * ratios.minutes;
        inputs.seconds.value = days * ratios.seconds;
    }
    // find buttons and add event listeners
    // Object.keys(inputs) give us an array ['days', 'hours', 'minutes', 'seconds']
    Object.keys(inputs).forEach(key => {
        const btnId = key + 'Btn'; 
        const btn = document.getElementById(btnId);

        btn.addEventListener('click', function() {
            // take the value from the input and convert it to number
            const value = Number(inputs[key].value);
            convert(value, key);
        });
    });

} */








function attachEventsListeners() {
    // We get access to all input fields
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    // We get access all buttons 
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    // logic for button DAYS
    daysBtn.addEventListener('click', function() {
        let days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;

    });

    //logic for button HOURS
    hoursBtn.addEventListener('click', function() {
        let hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;

    });
    //logic for button MINUTES
    minutesBtn.addEventListener('click', function() {
        let minutes = Number(minutesInput.value);
        daysInput.value = minutes / 1440;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    });
    //logic for button SECONDS
    secondsBtn.addEventListener('click', function() {
        let seconds = Number(secondsInput.value);
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
    });
}