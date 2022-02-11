function calculator(num1, num2, operator) {
    let result = 0;
    let multiply = (a, b) => a * b;

    let divide = (a, b) => a / b;

    let add = (a, b) => a + b;

    let subtract = (a, b) => a - b;
    switch (operator) {
        case `multiply`: result = multiply(num1, num2)
            break;
        case `divide`: result = divide(num1, num2)
            break;
        case `add`: result = add(num1, num2)
            break;
        case `subtract`: result = subtract(num1, num2)
            break;
    }

    console.log(result);

}




calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');


