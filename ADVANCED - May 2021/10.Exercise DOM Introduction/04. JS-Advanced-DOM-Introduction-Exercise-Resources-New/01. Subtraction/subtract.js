function subtract() {
    let first = document.getElementById(`firstNumber`)
    let firstNum = Number(first.value)
    let second = document.getElementById(`secondNumber`)
    let secondNum=Number(second.value)
    let sum = firstNum - secondNum;
    document.getElementById(`result`).textContent = sum;

}