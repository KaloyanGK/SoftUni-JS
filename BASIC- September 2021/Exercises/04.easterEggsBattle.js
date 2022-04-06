function demo(input) {
    let index = 0;
    let playerOneEggs = input[index];
    index++;
    let playerTwoeggs = input[index];
    index++;
    let command = input[index];
    while (command !== `End of battle`) {
        let winner = command;
        index++;
        command = input[index]
        if (winner === `one`) {
            playerTwoeggs -= 1;
        } else if (winner === `two`) {
            playerOneEggs -= 1;
        }
        if (playerOneEggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoeggs} eggs left.`);
            break;
        } else if (playerTwoeggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
            break;
        }
    }
    if (command === `End of battle`) {
        console.log(`Player one has ${playerOneEggs} eggs left.`);
        console.log(`Player two has ${playerTwoeggs} eggs left.`);
    }
} demo(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End of battle"])