function demo(input) {
    let index = 0;
    let eggs = Number(input[index]);
    index++;
    let command = input[index];
    let soldCounter = 0;
    while (command !== `Close`) {
        let action = command;
        index++;
        let count = Number(input[index]);
        index++;
        command = input[index];
        if (action === `Buy`) {
            if (eggs < count) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggs}.`);
                break;
            }
            eggs -= count;
            soldCounter += count;
        } else if (action === `Fill`) {
            eggs += count;
        }
    }
    if (command === `Close`) {
        console.log(`Store is closed!`);
        console.log(`${soldCounter} eggs sold.`);

    }

} demo(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])