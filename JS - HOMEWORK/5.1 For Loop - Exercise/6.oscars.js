function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluaterName = "";
    let evaluaterPoints = 0;
    let pointsNeeded = 1250.5;

    for (let i = 3; i < input.length; i++) {
        evaluaterName = input[i++]
        evaluaterPoints = input[i]


        academyPoints = academyPoints + (evaluaterName.length * evaluaterPoints) / 2;
        if (academyPoints >= pointsNeeded) {
            console.log(
                `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(academyPoints - pointsNeeded).toFixed(1);
    if (academyPoints < pointsNeeded) {
        console.log(`Sorry, ${actorName} you need ${diff} more!`);
    }

} oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
