/* function encodeAndDecodeMessages() {
    // find the buttons and text areas
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    const [inputMsg, outputMsg] = document.querySelectorAll('textarea');

    // logic of encoding
    encodeBtn.addEventListener('click', () => {
        let text = inputMsg.value;

        // divided on characters -> go on each -> move code on +1 -> back to string
        let encoded = text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        outputMsg.value = encoded; // send on the second textarea
        inputMsg.value = ""; // clear the first textarea

    });
    // logic of decoding
    decodeBtn.addEventListener('click', () => {
        let text = outputMsg.value;

        // the same but move code -1
        let decoded = text.split('').map(char => String.fromCharCode(char.charCodeAt(0) -1)).join('');

        outputMsg.value = decoded; // change text in textarea of getter 
    });
}


 */








function encodeAndDecodeMessages() {
    // find all elemtns (they don't have ID, so we search by tags)
    let buttons = document.querySelectorAll('button');
    let textareas = document.querySelectorAll('textarea');

    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    let senderTextarea = textareas[0];
    let receiverTextarea = textareas[1];

    // Hang the event on the button "Encode and send it"
    encodeButton.addEventListener('click', function() {
        let message = senderTextarea.value;
        let encodedMessage = "";

        // go through each character in the message
        for (let i = 0; i < message.length; i++) {
            // get ASCII code of the character
            let currentCode = message.charCodeAt(i);
            // create new character with code +1 and add to the result
            encodedMessage += String.fromCharCode(currentCode + 1);
        }

        // output the result and clean the sender textarea
        receiverTextarea.value = encodedMessage;
        senderTextarea.value = "";
    });
    // hang the event on the button "Decode and read it"
    decodeButton.addEventListener('click', function() {
        let message = receiverTextarea.value;
        let decodedMessage = "";

        // go through each character in the hash message
        for (let i = 0; i < message.length; i++) {
            // get ASCII code of the character
            let currentCode = message.charCodeAt(i);
            // create letter with code -1 (return how it was)
            decodedMessage += String.fromCharCode(currentCode - 1);
        }
        //change text in the receiver textarea to decoded message
        receiverTextarea.value = decodedMessage;
    })
}