function finalCompetition(input) {

    let dancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let price = dancer * points;
    let totalPrice = 0;

    if (place === `Bulgaria`) {
        switch (season) {
            case `summer`: totalPrice = price; break;
            case `winter`: totalPrice = price; break;
        }
    } else if (place === `Abroad`) {
        switch (season) {
            case `summer`: totalPrice = price + (price * 0.5); break;
            case `winter`: totalPrice = price + (price * 0.5); break;
        }
    }
    if (place === `Bulgaria`) {
        switch (season) {
            case `summer`: totalPrice = totalPrice * 0.95; break;
            case `winter`: totalPrice = totalPrice * 0.92; break;
        }
    } else if (place === `Abroad`) {
        switch (season) {
            case `summer`: totalPrice = totalPrice * 0.90; break;
            case `winter`: totalPrice = totalPrice * 0.85; break;
        }
    }

    let cherityMoney = totalPrice * 0.75;
    let moneyLeft = totalPrice - cherityMoney;
    let moneyPerDancer = moneyLeft / dancer;

    console.log(`Charity - ${cherityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
} finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])

