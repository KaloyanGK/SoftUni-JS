function demo(input) {
    let index = 0;
    let currentSum = input[index];
    let finalSum = 0;

    while (currentSum !== `NoMoreMoney`) {
        let currentNum = Number(currentSum);
        if (currentNum < 0) {
            console.log(`Invalid operation!`); break;
        }
        finalSum += currentNum;
        console.log(`Increase: ${currentNum.toFixed(2)}`);
        index++
        currentSum = input[index];
    }
    console.log(`Total: ${finalSum.toFixed(2)}`)

} demo(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])


