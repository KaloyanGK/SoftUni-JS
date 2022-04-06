function demo(input) {
    let n = Number(input[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        sum += number;

    }
    let average = sum / n;
    console.log(average.toFixed(2));
} demo([`2`
    , `6`
    , `4`
])