function balance(input) {

    let i = 0;
    let number = input[i];
    let sum = 0;

    while (number !== `NoMoreMoney`) {
        let currentNumber = Number(number);
        if (currentNumber < 0) {
            console.log(`Invalid operation!`);break;
        }
        sum += currentNumber;
        console.log(`Increase: ${currentNumber.toFixed(2)}`);
        i++;
        number = input[i];

    }
    console.log(`Total: ${sum.toFixed(2)}`)

} balance(["120",
    "45.55",
    "-150"])


