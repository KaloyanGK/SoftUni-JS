function demo(input) {
    let index = 0;
    let cakes = Number(input[index++]);

    let numS = Number.MIN_SAFE_INTEGER;
    let numF = Number.MIN_SAFE_INTEGER
    let sumSugar = 0;
    let sumFlour = 0;

    for (let i = 0; i < cakes; i++) {
        let currentSugar = Number(input[index++]);
        let currentFlour = Number(input[index++]);

        if (currentSugar > numS) {
            numS = currentSugar;
        }
        if (currentFlour > numF) {
            numF = currentFlour;
        }
        sumSugar += currentSugar;
        sumFlour += currentFlour;


    }
    let sugarPackage = Math.ceil(sumSugar / 950);
    let flourPackage = Math.ceil(sumFlour / 750);
    console.log(`Sugar: ${sugarPackage}`);
    console.log(`Flour: ${flourPackage}`);
    console.log(`Max used flour is ${numF} grams, max used sugar is ${numS} grams.`);

}
demo([`4`, `500`, `350`, `560`, `430`, `600`, `345`, `578`, `543`])