function demo(input) {
    let n = Number(input[0]);
    let currentNumber = 0;
    let totalScore = 0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    
    for (let i = 1; i <= n; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber >= 0 && currentNumber <= 9) {
            currentNumber = currentNumber * 0.2;
            c1++;
            totalScore += currentNumber;
        } else if (currentNumber > 9 && currentNumber <= 19) {
            c2++
            currentNumber = currentNumber * 0.3;
            totalScore += currentNumber;

        } else if (currentNumber > 19 && currentNumber <= 29) {
            c3++;
            currentNumber = currentNumber * 0.4;
            totalScore += currentNumber;

        } else if (currentNumber > 29 && currentNumber <= 39) {
            c4++;
            currentNumber = 50;
            totalScore += currentNumber;
        } else if (currentNumber > 39 && currentNumber <= 50) {
            c5++;
            currentNumber = 100;
            totalScore += currentNumber;
        } else if (currentNumber < 0 || currentNumber > 50) {
            c6++;
            totalScore /= 2;
        }
    }
    let c1Percet = c1 / n * 100;
    let c2Percet = c2 / n * 100;
    let c3Percet = c3 / n * 100;
    let c4Percet = c4 / n * 100;
    let c5Percet = c5 / n * 100;
    let c6Percet = c6 / n * 100;

    console.log(`${totalScore.toFixed(2)}`);
    console.log(`From 0 to 9: ${c1Percet.toFixed(2)}%`);
    console.log(`From 10 to 19: ${c2Percet.toFixed(2)}%`);
    console.log(`From 20 to 29: ${c3Percet.toFixed(2)}%`);
    console.log(`From 30 to 39: ${c4Percet.toFixed(2)}%`);
    console.log(`From 40 to 50: ${c5Percet.toFixed(2)}%`);
    console.log(`Invalid numbers: ${c6Percet.toFixed(2)}%`);
} demo([`10`, `43`, `57`, `-12`, `23`, `12`, `0`, `50`, `40`, `30`, `20`])




