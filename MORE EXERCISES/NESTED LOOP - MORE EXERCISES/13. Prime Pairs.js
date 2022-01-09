function demo(input) {

    let startFirst = Number(input[0]);
    let startSecond = Number(input[1]);

    let firstPlus = Number(input[2]);
    let secondPlus = Number(input[3]);

    let endFirst = startFirst + firstPlus;
    let endSecond = startSecond + secondPlus;

    for (let i = startFirst; i <= endFirst; i++) {
        for (let j = startSecond; j <= endSecond; j++) {
            let isFirstPrime = true;
            let isSecondPrime = true;
            for (let a = 2; a < i; a++) {
                if (i % a === 0) {
                    isFirstPrime = false;
                    break;
                }
            }
            for (let b = 2; b < j; b++) {
                if (j % b === 0) {
                    isSecondPrime = false;
                    break;
                }
            }
            if (isFirstPrime && isSecondPrime) {
                console.log(`${i}${j}`);
            }
        }
    }
} demo(["10",
    "20",
    "5",
    "5"])
