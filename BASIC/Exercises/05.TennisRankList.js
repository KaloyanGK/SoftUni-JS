function tennisRankList(input) {

    let tournaments = Number(input[0]);
    let startingPoitns = Number(input[1]);
    let totalPoints = startingPoitns;
    let winCounter = 0;
    for (let i = 1; i <= tournaments; i++) {
        let stage = input[i + 1];
        if (stage === `W`) {
            totalPoints += 2000;
            winCounter++;
        } else if (stage === `F`) {
            totalPoints += 1200;
        } else if (stage === `SF`) {
            totalPoints += 720;
        }
    }
    let totalWonPointes = totalPoints - startingPoitns;
    let avaragepoints = Math.floor(totalWonPointes / tournaments);
    let percentWonTournaments = winCounter / tournaments * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avaragepoints}`);
    console.log(`${percentWonTournaments.toFixed(2)}%`);
} tennisRankList(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])