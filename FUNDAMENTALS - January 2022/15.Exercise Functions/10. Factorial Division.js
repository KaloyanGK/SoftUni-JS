function factDiv(num1, num2) {

    function factorialDivision(number) {
        let result = 1;
        while (number != 1) {
            result *= number;
            number -= 1;
        }
        return result;
    }

    let finalResult = factorialDivision(num1) / factorialDivision(num2);
    console.log(finalResult.toFixed(2));


}
factDiv(5, 2)