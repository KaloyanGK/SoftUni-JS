function coffe(input) {

    let typeOfDrink = input[0];

    let sugarWithOrWithout = input[1];

    let numbersOfDrinks = input[2];

    let prizeForDrink = 0;

    let percentOfPrize = 0;

    let finalPrize = 0;

    if (typeOfDrink === "Espresso") {
        switch (sugarWithOrWithout) {
            case "Without": prizeForDrink = numbersOfDrinks * 0.90;
                prizeForDrink = prizeForDrink - (prizeForDrink * 0.35); break;
            case "Normal": prizeForDrink = numbersOfDrinks * 1; break;
            case "Extra": prizeForDrink = numbersOfDrinks * 1.20; break;

        } if (numbersOfDrinks > 5) {
            percentOfPrize = prizeForDrink * 0.25;
            finalPrize = prizeForDrink - percentOfPrize;
            if (finalPrize > 15) {
                finalPrize = finalPrize - (finalPrize * 0.20);
            }
            console.log(finalPrize.toFixed(2))
        }
    } else if (typeOfDrink === "Cappuccino") {
        switch (sugarWithOrWithout) {
            case "Without": prizeForDrink = numbersOfDrinks * 0.90;
                prizeForDrink = prizeForDrink - (prizeForDrink * 0.35); break;
            case "Normal": prizeForDrink = numbersOfDrinks * 1.20; break;
            case "Extra": prizeForDrink = numbersOfDrinks * 1.60; break;
        }
        if (prizeForDrink > 15) {
            prizeForDrink = prizeForDrink - (prizeForDrink * 0.20);
            console.log(prizeForDrink);
        }
    } else if (typeOfDrink === "Tea") {
        switch (sugarWithOrWithout) {
            case "Without": prizeForDrink = numbersOfDrinks * 0.50;
                prizeForDrink = prizeForDrink - (prizeForDrink * 0.35); break;
            case "Normal": prizeForDrink = numbersOfDrinks * 0.60; break;
            case "Extra": prizeForDrink = numbersOfDrinks * 0.70; break;
        }
        if (prizeForDrink > 15) {
            prizeForDrink = prizeForDrink - (prizeForDrink * 0.20);
        } console.log(prizeForDrink.toFixed(2));
    }
} coffe([`Espresso`, `Without`, `10`])