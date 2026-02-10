/* const sortNames = (array) => {
    for (let i = 1; i < array.length; i++) {
        let currentName = array[i];
        let j = i - 1;

        while (j >= 0 && array[j].localeCompare(currentName) > 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentName;
    }
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}. ${array[i]}`);
    }
}
sortNames(['John', 'Bob', 'Christina', 'Ema']);
 */

const sortNames = (array) => {
    array.sort((a, b) => a.localeCompare(b));
    array.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    })
}
sortNames(['John', 'Bob', 'Christina', 'Ema']);



/* const sortNames = (array) => {
    return array.sort((a, b) => a.localeCompare(b));

}
console.log(sortNames(['John', 'Bob', 'Christina', 'Ema']));
 */

