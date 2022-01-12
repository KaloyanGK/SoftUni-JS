function demo(input) {

    let balls = Number(input[0]);
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;

    let score = 0;
    for (let i = 1; i <= balls; i++) {
        let currentBall = input[i];
        if (currentBall === `red`) {
            red++
            score += 5;
        } else if (currentBall === `orange`) {
            orange++;
            score += 10;
        } else if (currentBall === `yellow`) {
            yellow++;
            score += 15;
        } else if (currentBall === `white`) {
            white++;
            score += 20;
        } else if (currentBall === `black`) {
            black++;
            Math.floor(score /= 2)
        } else {
            other++;
            score = score;
        }
    }
    console.log(`Total points: ${score}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

} demo(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])
