function demo(input) {

    let numbers = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(input[i]);
        if (currentNum % 2 === 0) {
            p1++;
        } if (currentNum % 3 === 0) {
            p2++;
        } if (currentNum % 4 === 0) {
            p3++;
        }
    }
    let percentP1 = p1 / numbers * 100;
    let percentP2 = p2 / numbers * 100;
    let percentP3 = p3 / numbers * 100;

    console.log(`${percentP1.toFixed(2)}%`);
    console.log(`${percentP2.toFixed(2)}%`);
    console.log(`${percentP3.toFixed(2)}%`);

} demo
    ([`10`, `680`, `2`, `600`, `200`, `800`, `799`, `199`, `46`, `128`, `65`])

    // ([`3`, `3`, `6`, `9`])