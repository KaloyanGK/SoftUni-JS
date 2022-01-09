function fitnessCenter(input) {

    let people = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let training = 0;
    let consume = 0;

    for (let i = 1; i <= people; i++) {
        let x = input[i];
        if (x === `Back`) {
            back++
        } else if (x === `Chest`) {
            chest++
        } else if (x === `Legs`) {
            legs++
        } else if (x === `Abs`) {
            abs++
        } else if (x === `Protein shake`) {
            proteinShake++
        } else if (x === `Protein bar`) {
            proteinBar++
        }
        if (x === `Chest` || x === `Back` || x === `Legs` || x === `Abs`) {
            training++
        } else if (x === `Protein shake` || x === `Protein bar`) {
            consume++
        }

    }
    let percentTraining = training / people * 100;
    let consumePercent = consume / people * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${percentTraining.toFixed(2)}% - work out`);
    console.log(`${consumePercent.toFixed(2)}% - protein`);
} fitnessCenter(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"])