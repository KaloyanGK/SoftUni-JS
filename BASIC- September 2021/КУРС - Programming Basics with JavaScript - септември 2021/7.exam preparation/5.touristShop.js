function demo(input) {

    let index = 0;
    let budget = Number(input[index])
    index++;
    let currentInput = input[index];
    let counter = 0;
    let counterSpending = 0;
    let isThereAnyMoney = true;

    while (currentInput !== "Stop") {
        
        counter++;
        index++;
        currentInput = input[index];
        let currentPrize = Number(currentInput);
        if (counter % 3 === 0) {
            currentPrize = currentPrize / 2;

        }
        counterSpending += currentPrize;
        index++;
        currentInput = input[index];
        if (counterSpending > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(counterSpending - budget).toFixed(2)} leva!`);
            isThereAnyMoney = false;
            break;
        }
    }
    if (isThereAnyMoney) {
        console.log(`You bought ${counter} products for ${(counterSpending).toFixed(2)} leva.`);
    }
} demo([`54`,
    `Thermal underwear`,
    `24`,
    `Sunscreen`,
    `45`,]);