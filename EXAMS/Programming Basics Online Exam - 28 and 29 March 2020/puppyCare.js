function careOfPuppy(input) {

    index = 0;
    let foodInKg = Number(input[index]);
    index++;
    let food = input[index];
    index++;
    let totalFood = 0;

    while (food !== `Adopted`) {
        let foodInGr = Number(food);
        totalFood += foodInGr;
        food = input[index];
        index++;
    }
    let foodInGr = foodInKg * 1000;
    let diff = Math.abs(foodInGr - totalFood);

    if (foodInGr >= totalFood) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);

    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }

} careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
