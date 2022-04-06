function movieStars(input) {
    index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++
    while (command !== `ACTION`) {
        let name = command;
        if (name.length > 15) {
            budget -= budget * 0.20;
        } else {
            let fee = Number(input[index])
            index++;
            budget -= fee;

        } if (budget < 0) {
            budget = Math.abs(budget);
            console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
            break;

        }
        command = input[index];
        index++;

    }
    if (command === "ACTION") {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    }

}
movieStars
    // (["170000",
    //     "Ben Affleck",
    //     "40000.50",
    //     "Zahari Baharov",
    //     "80000",
    //     "Tom Hanks", "2000.99", "ACTION"])

    ([`90000`, `Christian Bale`, `70000.50`, `Leonard DiCaprio`, `Kevin Spacey`, `24000.99`])