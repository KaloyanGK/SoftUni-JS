function club(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    let drinkOrder = 0;
    let currentDrink = ``;
    while (command !== `Party!`) {
        currentDrink = command.length;
        let price = Number(currentDrink);
        index++;
        command = input[index];
        let order = Number(command);
        let sum = price * order;
        if (sum % 2 == 0) {
            sum = sum;
        } else if (sum % 2 !== 0) {
            sum = sum * 0.75;
        }
        drinkOrder += sum;
        index++;
        command = input[index];
        if (drinkOrder >= target) {
            console.log(`Target acquired.`);
            break;
        }
    }
    let diff = Math.abs(target - drinkOrder)
    if (command === `Party!`) {
        if (drinkOrder < target) {
            console.log(`We need ${diff.toFixed(2)} leva more.`);
            console.log(`Club income - ${drinkOrder.toFixed(2)} leva.`);
        }
    }
    if (drinkOrder >= target) {
        console.log(`Club income - ${drinkOrder.toFixed(2)} leva.`);
    }
} club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])

