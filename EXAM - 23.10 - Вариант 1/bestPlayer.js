function bestPlayer(input) {

    let index = 0;
    let command = input[index++];
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let isDid = false;
    let nameofPlayer = ''
    let sumGoals = 0;
    while (command !== 'END') {
        let name = command;
        let goals = Number(input[index++]);
        if (goals > maxGoals) {
            maxGoals = goals;
            nameofPlayer = name;
            sumGoals = goals;
        }
        if (goals >= 10) {
            console.log(`${nameofPlayer} is the best player!`);
            console.log(`He has scored ${sumGoals} goals and made a hat-trick !!!`);
            isDid = true;
            break;
        }
        command = input[index++];
    }
    if (!isDid) {
        if (sumGoals >= 3) {
            console.log(`${nameofPlayer} is the best player!`);
            console.log(`He has scored ${sumGoals} goals and made a hat-trick !!!`);
        } else {
            console.log(`${nameofPlayer} is the best player!`);
            console.log(`He has scored ${sumGoals} goals.`);
        }
    }
} bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "10"])

