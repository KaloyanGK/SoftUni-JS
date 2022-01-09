function minNumber(input) {
    let inputNumber = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (inputNumber !== `Stop`) {
        let currentNumber = Number(inputNumber)
        if (currentNumber < min) {
            min = currentNumber;
        }
        inputNumber = input[index]
        index++
    }
    console.log(min);
} minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])

