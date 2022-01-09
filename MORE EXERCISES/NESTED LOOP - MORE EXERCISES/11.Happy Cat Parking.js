function demo(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let price = 0;

    for (let d = 1; d <= days; d++) {
        let hourCharge = 0;
        let dayCharge = 0;
        for (let h = 1; h <= hours; h++) {
            if (d % 2 == 0 && h % 2 !== 0) {
                hourCharge = 2.50;
            } else if (d % 2 !== 0 && h % 2 == 0) {
                hourCharge = 1.25;
            } else {
                hourCharge = 1;
            }
            price += hourCharge;
            dayCharge += hourCharge;
        }
        console.log(`Day: ${d} - ${dayCharge.toFixed(2)} leva`);
    }
    console.log(`Total: ${price.toFixed(2)} leva`);
} demo([`2`, `5`])