const WordsUppercase = (argument) => {
    const words = argument.match(/\w+/g);
    if (!words) return;
    let result = words.map(word => word.toUpperCase()).join(', ');
    console.log(result);
}
WordsUppercase('Hi, how are you?');
WordsUppercase('hello');