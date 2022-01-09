function maidenParty(input) {

    let partyPrice = Number(input[0]);
    let lovePcs = Number(input[1]);
    let rosesPcs = Number(input[2]);
    let keyPcs = Number(input[3])
    let picPcs = Number(input[4]);
    let luckyPcs = Number(input[5]);

    let totalOrder = lovePcs + rosesPcs + keyPcs + picPcs + luckyPcs;

    let lovePrice = lovePcs * 0.60;
    let rosesPrice = rosesPcs * 7.20;
    let keyPrice = keyPcs * 3.60;
    let picPrice = picPcs * 18.20;
    let luckyPrice = luckyPcs * 22;

    let totalPrice = lovePrice + rosesPrice + keyPrice + picPrice + luckyPrice;
    if (totalOrder >= 25) {
        totalPrice = totalPrice * 0.65;
    } else {
        totalPrice = totalPrice;
    }
    let hostPrice = totalPrice * 0.1;
    let totalProfit = totalPrice - hostPrice;

    let diff = Math.abs(totalProfit - partyPrice);
    if (totalProfit >= partyPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }


} maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
