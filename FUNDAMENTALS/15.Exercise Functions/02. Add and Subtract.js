function addAndSubtarct(num1, num2, num3) {

    function add(number1, number2) {
        return number1 + number2;
    }
    function subtrack(sum, num3) {
        return sum - num3;
    }
    let sum = add(num1, num2);
    let finalResult = subtrack(sum, num3)
    console.log(finalResult);
}
addAndSubtarct(42, 58, 100)