function calc() {
    let firstElement = document.getElementById(`num1`);
    let secondElement = document.getElementById(`num2`);
    let firstNumber = Number(firstElement.value)
    let secondNumber = Number(secondElement.value);

    let sum = firstNumber + secondNumber;
    let result = document.getElementById(`sum`);
    result.value = sum;

}
