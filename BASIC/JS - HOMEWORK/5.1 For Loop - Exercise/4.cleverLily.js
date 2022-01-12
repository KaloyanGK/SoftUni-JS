function cleverLily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let singletoyPrice = Number(input[2]);
    let toyCounter = 0;
    let saveMoney = 0;
    let money = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounter++
        } else {
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }
    saveMoney += toyCounter * singletoyPrice;
    let diff = Math.abs(saveMoney - washerPrice)
    if (saveMoney >= washerPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);

    }
}
cleverLily(["21",
    "1570.98",
    "3"])

