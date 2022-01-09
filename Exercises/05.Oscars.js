function demo(input) {
    let index = 0;
    let actorName = input[0];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let oceniteli = Number(input[index]);
    index++;
    let currentActor = ``;
    let currentPoints = 0;
    let pointsNeed = 1250.5;
    for (let i = 0; i < oceniteli; i++) {
        currentActor = input[index++];
        currentPoints = Number(input[index++])

        academyPoints += (currentActor.length * currentPoints / 2);
        if (academyPoints > pointsNeed) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }

    }
    let diff = Math.abs(academyPoints - 1250.5);
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }

} demo(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])