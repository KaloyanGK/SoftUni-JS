function goldMine(input) {

    let locations = Number(input[0]);

    let expectedGold = Number(input[1]);

    let days = Number(input[2]);
    let totalGold = 0;
    for (let i = 3; i < 6; i++) {
        totalGold += Number(input[i]);

    }
    let avarageGold = totalGold / days;


    if (avarageGold > expectedGold) {
        console.log(`Good job! Average gold per day: ${avarageGold.toFixed(2)}.`);
    }






} goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
