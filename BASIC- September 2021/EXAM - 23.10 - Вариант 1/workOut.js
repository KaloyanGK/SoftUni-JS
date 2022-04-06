function workOut(input) {
    let km = Number(input[1]);
    let target = 1000;
    let kmTotal = km;
    let percent = 0;
    for (let i = 2; i < input.length; i++) {
        percent = Number(input[i]);
        km += (percent * km) / 100;
        kmTotal += km;
    }
    if (kmTotal >= target) {
        console.log(`You've done a great job running ${Math.ceil(kmTotal - target)} more   kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(target - kmTotal)} more kilometers`);
    }
} workOut(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])

