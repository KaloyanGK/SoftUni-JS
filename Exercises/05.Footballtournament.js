function tournamnet(input) {

    let club = input[0];
    let games = Number(input[1]);
    let win = 0;
    let lost = 0;
    let draw = 0;
    let points = 0;
    for (let i = 1; i <= games; i++) {
        let result = input[i + 1];

        if (result === `W`) {
            win++
            points += 3;
        } else if (result === `L`) {
            lost++
        } else if (result === `D`) {
            points += 1;
            draw++
        }
    }
    let winsPercentege = win / games * 100;
    if (games == 0) {
        console.log(`${club} hasn't played any games during this season.`);
    } else {
        console.log(`${club} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${win}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${winsPercentege.toFixed(2)}%`);
    }



} tournamnet(["Chelsea",
    "0"])


