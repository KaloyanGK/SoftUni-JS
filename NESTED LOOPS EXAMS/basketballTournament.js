function demo(input) {
    let index = 0;
    let command = input[index];
    index++;
    let counter = 0;
    let winsCounter = 0;
    let loseCounter = 0;
    while (command !== `End of tournaments`) {
        let gameName = command;
        let games = Number(input[index]);
        index++;
        let desyScore = 0;
        let opositeScore = 0;
        let counterOfMatches = 0;
        for (let i = 1; i <= games; i++) {
            counterOfMatches++;
            desyScore = Number(input[index++]);
            opositeScore = Number(input[index]);

            let diff = Math.abs(desyScore - opositeScore);
            if (desyScore > opositeScore) {
                winsCounter++;
                console.log(`Game ${counterOfMatches} of tournament ${gameName}: win with ${diff} points.`);
            } else if (desyScore < opositeScore) {
                loseCounter++;
                console.log(`Game ${counterOfMatches} of tournament ${gameName}: lost with ${diff} points.`);
            }
            command = input[index];
            index++;

        }
        counter += counterOfMatches;
        command = input[index];
        index++;
    }
    let percentWin = winsCounter / counter * 100;
    let percentLose = loseCounter / counter * 100;
    if (command === `End of tournaments`) {
        console.log(`${percentWin.toFixed(2)}% matches win`);
        console.log(`${percentLose.toFixed(2)}% matches lost`);
    }


} demo(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])