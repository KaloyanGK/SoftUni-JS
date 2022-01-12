function demo(input) {

    let index = 0;
    let chefs = Number(input[index]);
    index++;
    let score = 0;
    let command = input[index];

    let winnerChef = '';

    for (let i = 1; i <= chefs; i++) {
        let chefName = '';
        chefName = input[index];
        index++;
        let currentScore = 0;
        let points = 0;
        while (command !== `Stop`) {
            points = Number(input[index]);
            currentScore += points;
            command = input[index];
            index++;
            command = input[index];

        }
        if (command === "Stop") {
            console.log(chefName);
            console.log(currentScore);
        }
        if (currentScore > score) {
            score = currentScore;
            winnerChef = chefName
            console.log(`${chefName} is the new number 1!`);
        }
        index++;
        command = input[index];

    }
    console.log(`${winnerChef} won competition with ${score} points!`);

} demo(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])