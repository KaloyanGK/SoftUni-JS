function beerAndChips(input) {

    let fanName = input[0];
    let budget = Number(input[1]);
    let beerPcs = Number(input[2]);
    let chipsPcs = Number(input[3]);

    let beerTotalPrice = beerPcs * 1.20;
    let chipsPrice = beerTotalPrice * 0.45;
    let chipsTotalPrice = Math.ceil(chipsPcs * chipsPrice);
    let totalPrice = beerTotalPrice + chipsTotalPrice;
    let diff = Math.abs(totalPrice - budget);
    if (budget >= totalPrice) {
        console.log(`${fanName} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${fanName} needs ${diff.toFixed(2)} more leva!`);
    }


} beerAndChips(["Valentin",
    "5",
    "2",
    "4"])
