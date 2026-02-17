function subtract() {
    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;

    const result = Number(firstValue) - Number(secondValue);

    document.getElementById('result').textContent = result;
}