function catWalking(input) {
    let min = Number(input[0]);
    let walk = Number(input[1]);
    let cals = Number(input[2]);


    let totalTime = min * walk;
    let burnCals = totalTime * 5;
    let needBurnCals = cals * 0.5;
    // console.log(needBurnCals);
    if (burnCals >= needBurnCals) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCals}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCals}. `);
    }
} catWalking([`30`, `3`, `600`])