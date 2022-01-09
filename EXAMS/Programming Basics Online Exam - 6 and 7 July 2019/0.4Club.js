function club(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    let price = 0;
    let totalPrice = price;
    while (command !== `Party!`) {
        let drink = command.length;
        index++
        let drinkCount = Number(command);
        command = input[index];
        index++;
        if (price % 2 == 0) {
            price = drink * drinkCount;
        } else {
            price = (price * drinkCount) * 0.75;
        }
        totalPrice += price;
        if (totalPrice >= target) {
            console.log(`Target acquired.`);
            break;
        }
    }
    let diff = Math.abs(target - totalPrice);
    if (command === `Party!`) {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
} club([`500`, `Bellini`, `6`, `Bamboo`, `7`, `Party!`])