function sign(a, b, c) {
    let negativeCounter = 0;
    if (a < 0) {
        negativeCounter++
    } if (b < 0) {
        negativeCounter++
    } if (c < 0) {
        negativeCounter++
    }

    if (negativeCounter % 2 == 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}

sign(5, 12, -15)
sign(-6, -12, 14)
sign(-1, -2, -3)