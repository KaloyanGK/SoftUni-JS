function sumOfDigits(number) {

    let numberAsString = String(number)
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i])
        sum += currentNumber;
    }
    console.log(sum);
} sumOfDigits(245678)
sumOfDigits(97561)
sumOfDigits(543)