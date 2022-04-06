function equalPairs(input) {

    let index = 0;
    let n = Number(input[index++]);
    let oldSum = 0;
    let maxDiff = 0;

    for (let i = 0; i < n; i++) {
        let x = Number(input[index++]);
        let y = Number(input[index++]);
        if (i >= 1) {
            let newSum = x + y;
            if (oldSum !== newSum) {
                maxDiff = Math.abs(oldSum - newSum);
            }
        }
        oldSum = x + y;
    }
    if (maxDiff > 0) {
        console.log(`No, maxdiff=${maxDiff}`);
    } else {
        console.log(`Yes, value=${oldSum}`);
    }
}
equalPairs([`3`, `1`, `2`, `0`, `3`, `4`, `-1`])