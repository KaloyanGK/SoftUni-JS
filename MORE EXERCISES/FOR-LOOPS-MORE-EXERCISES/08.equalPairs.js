function demo(input) {

    let broiDvoiki = input[0];
    let firstNumbers = 0;
    let secondNumber = 0;
    let total = firstNumbers + secondNumber;
    let maxDifference = 0;

    for (let i = 1; i <= broiDvoiki * 2; i += 2) {

        firstNumbers = Number(input[i]);
        secondNumber = Number(input[i + 1]);

        let currentTotal = firstNumbers + secondNumber;
        let currentDifference = Math.abs(currentTotal - total);
        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }

        total = currentTotal
        if (total === currentTotal) {
            console.log(`Yes, value = ${total}`);
        } else {
            console.log(`No, maxdiff = ${maxDifference}`);
        }
    }


} demo([`3`, `1`, `2`, `0`, `3`, `4`, ` - 1`])