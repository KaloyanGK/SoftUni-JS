function catDiet(input) {

    let masPercet = Number(input[0]);
    let proteinPercet = Number(input[1]);
    let carbsPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);

    let masGrams = (totalCalories * masPercet) / 100;
    let totalMasGrams = masGrams / 9;

    let proteinGrams = (totalCalories * proteinPercet) / 100;
    let totalProteinGrams = proteinGrams / 4;

    let carbsGrams = (totalCalories * carbsPercent) / 100;
    let totalCarbsGrams = carbsGrams / 4;

    let foodWeight = totalMasGrams + totalProteinGrams + totalCarbsGrams;
    let caloriesPerGram = totalCalories / foodWeight;

    let otherPrcent = 100 - waterPercent;
    let calories = (caloriesPerGram * otherPrcent) / 100

    console.log((calories.toFixed(4)));

} catDiet(["60",
    "25",
    "15",
    "2500",
    "60"])
