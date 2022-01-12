function demo(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let command = input[index];
    let game = '';
    let result = ''
    let totalEarnedMoney = 0;
    let totalWinCounter = 0;
    let totalLoseCouter = 0;
    for (let i = 0; i < days; i++) {

        let moneyEarned = 0;
        let winCounter = 0;
        let loseCounter = 0;
        while (command !== `Finish`) {
            game = input[index];
            index++;
            result = input[index];
            index++
            command = input[index];
            if (result === `win`) {
                winCounter++;
                moneyEarned += 20;
            } else if (result === `lose`) {
                loseCounter++
            }
        }
        if (winCounter > loseCounter) {
            moneyEarned = moneyEarned + (moneyEarned * 0.1)
        }

        index++;
        command = input[index];
        totalEarnedMoney += moneyEarned;
        totalWinCounter += winCounter;
        totalLoseCouter += loseCounter;
    }
    if (totalWinCounter > totalLoseCouter) {
        totalEarnedMoney = totalEarnedMoney + (totalEarnedMoney * 0.2)
        console.log(`You won the tournament! Total raised money: ${totalEarnedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalEarnedMoney.toFixed(2)}`);
    }

} demo(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])