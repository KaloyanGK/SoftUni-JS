function foodForPets(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);
    let totalDogFood = 0;
    let totalCatFood = 0;
    let Biscuit = 0;
    let dayCounter = 0;

    for (let i = 0; i < days; i++) {
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);

        totalDogFood += dogFood;
        totalCatFood += catFood;
        dayCounter++
        if (dayCounter % 3 === 0) {
            Biscuit += (dogFood + catFood) * 0.10;
        }

    }
    let totalEatenFood = totalDogFood + totalCatFood;
    let percentDogFood = (totalDogFood / totalEatenFood) * 100;
    let percentCatFood = (totalCatFood / totalEatenFood) * 100;
    let percentEatenFood = (totalEatenFood / totalFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(Biscuit)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
} foodForPets([`3`, `500`, `100`, `30`, `110`, `25`, `120`, `35`])