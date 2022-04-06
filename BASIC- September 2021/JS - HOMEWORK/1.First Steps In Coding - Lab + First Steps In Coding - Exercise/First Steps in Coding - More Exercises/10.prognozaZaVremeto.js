function demo(input) {
    let a = Number(input[0]);

    if (a >= 26 && a <= 35) {
        console.log(`Hot`);
    } else if (a >= 20.1 && a <= 25.9) {
        console.log(`Warm`)
    } else if (a >= 15 && a <= 20) {
        console.log(`Mild`)
    } else if (a >= 12 && a <= 14.9) {
        console.log(`Cool`)
    } else if (a >= 5 && a <= 11.9) {
        console.log(`Cold`)
    } else {
        console.log(`unknown`)
    }


} demo([`0`])