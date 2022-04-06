function maxNumber(input) {
    let inputNumber = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (inputNumber !== `Stop`) {
        let currentNumber = Number(inputNumber);
        if (currentNumber > max) {
            max = currentNumber;
        }
        inputNumber = input[index]
        index++ 


    }
    console.log(max)
} maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
