function GameNumberwars(input) {

    let index = 0;
    let firstPlayer = input[index];
    index++;
    let secodPlayer = input[index];
    index++;
    let command = input[index];
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    while (command !== "End of game") {
        let playerOneCard = Number(command);
        index++;
        command = input[index]
        let playerTwoCard = Number(command);
        index++;
        command = input[index]
        if (playerOneCard > playerTwoCard) {
            playerOnePoints += (playerOneCard - playerTwoCard);
        } else if (playerOneCard < playerTwoCard) {
            playerTwoPoints += (playerTwoCard - playerOneCard);
        } else if (playerOneCard == playerTwoCard) {
            playerOneCard = Number(command);
            index++;
            command = input[index]
            playerTwoCard = Number(command);
            index++;
            command = input[index];
            if (playerOneCard > playerTwoCard) {
                console.log(`Number wars!`);
                console.log(`${firstPlayer} is winner with ${playerOnePoints} points`);
                break;
            } else if (playerTwoCard > playerOneCard) {
                console.log(`Number wars!`);
                console.log(`${secodPlayer} is winner with ${playerTwoPoints} points`);
                break;
            }
        }
    }
    if (command === `End of game`) {
        console.log(`${firstPlayer} has ${playerOnePoints} points`);
        console.log(`${secodPlayer} has ${playerTwoPoints} points`);
    }
} GameNumberwars(["Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"])