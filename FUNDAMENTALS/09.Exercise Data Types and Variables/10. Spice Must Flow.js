function spiceMustFlow(yield) {
    let spiceExtracted = 0;
    let dayCounter = 0;

    while (yield >= 100) {
        dayCounter++;
        spiceExtracted += yield - 26;
        yield -= 10;
    }
    console.log(dayCounter);
    if (dayCounter != 0) {
        console.log(spiceExtracted - 26);
    } else {
        console.log(spiceExtracted);
    }
} spiceMustFlow(111)
spiceMustFlow(450)