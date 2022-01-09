function demo(input) {


    let start = Number(input[0]);
    let end = Number(input[1]);
    let target = Number(input[2]);
    let combinations = 0;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            combinations++;
            if (a + b === target) {
                console.log(`Combination N:${combinations} (${a} + ${b} = ${target}) `);
                return;
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${target}`);
    
} demo(["23",
    "24",
    "20"])
