function examPreparation(input) {

    let index = 0;
    let namePlayer = input[index];
    index++;

    let command = input[index];




    let startingPoints = 301;

    let currentPoints = 0;
    let finalSumPoints = 0;
    let successfulShotsCounter = 0;
    let unsuccessfulShotsCounter = 0;

    while (command !== "Retire") {
        if (command === "Single") {
            index++;
            command = input[index];
            let points = Number(command);
            currentPoints = points;
            successfulShotsCounter++;
        } else if (command === "Double") {
            index++;
            command = input[index];
            let points = Number(command);
            currentPoints = points * 2;
            successfulShotsCounter++;
        } else if (command === "Triple") {
            index++;
            command = input[index];
            let points = Number(command);
            currentPoints = points * 3;
            successfulShotsCounter++;
        }
        if (currentPoints > startingPoints) {
            currentPoints = 0;
            successfulShotsCounter--;
            unsuccessfulShotsCounter++;
        }
        startingPoints -= currentPoints;
        index++;
        command = input[index];
        if (startingPoints === 0) {
            console.log(`${namePlayer} won the leg with ${successfulShotsCounter} shots.`);
            break;
        }
    }
    if (command === "Retire") {
        console.log(`${namePlayer} retired after ${unsuccessfulShotsCounter} unsuccessful shots.`);
    }



} examPreparation([`Stephen Bunting`,
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])