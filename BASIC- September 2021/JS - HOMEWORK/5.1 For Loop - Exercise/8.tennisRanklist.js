function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let stage = 0;
    let points = 0;
    let winCounter = 0;

    for (let i = 1; i <= tournaments; i++) {
        let stage = input[i + 1]

        if (stage === `W`) {
            winCounter++
            points += 2000;
        } else if (stage === `F`) {
            points += 1200;
        } else if (stage === `SF`) {
            points += 720;
        }
    }
    let totalPoints = startingPoints + points;
    let avaragePoints = Math.floor(points / tournaments);
    let winPerc = winCounter / tournaments * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avaragePoints}`);
    console.log(winPerc.toFixed(2) + `%`);
} tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);
