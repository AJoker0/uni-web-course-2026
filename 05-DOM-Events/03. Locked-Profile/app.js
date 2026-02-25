function lockedProfile() {
    // find all buttons "show more" in all profiles 
    // Array.from need to use forEach (in old browsers) 
    const buttons = Array.from(document.querySelectorAll('.profile button'));

    // add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    });

    function onClick(event) {
        // button that we click
        const btn = event.target;

        // find the parent element of the button - profile
        const profile = btn.parentNode;

        // inside this profile search radio button Unlock
        // input[value="unlock"] - find input with value "unlock"
        const unlockRadio = profile.querySelector('input[value="unlock"]');

        // find hidden div with additional information
        // usually it is the one <div> inside the profile , Apart from the wrapper itself
        const hiddenDiv = profile.querySelector('div');

        // main check: if profile is unlocked
        if (unlockRadio.checked) {
            // if the button says "Show more" - we show the hidden div and change the text to "Hide it"
            if (btn.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                btn.textContent = 'Hide it';
            }

            // if the button says "Hide it" - we hide the hidden div and change the text to "Show more"
            else if (btn.textContent === 'Hide it') {
                hiddenDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}






/* function lockedProfile() {
    // We use delegation or forEach immediately
    document.querySelectorAll('.profile button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const profile = e.target.parentElement;
            const isUnlocked = profile.querySelector('input[value="unlock"]').checked;
            const hiddentInfo = profile.querySelector('div');

            // if prohibited - (return)
            if (!isUnlocked) return;

            // change state
            if (e.target.textContent === 'Show more') {
                hiddentInfo.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddentInfo.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        });
    });
} */