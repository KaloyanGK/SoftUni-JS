function lunch(input) {

    let nameOfMovie = input[0];
    let movieLenght = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let lunchTime = lunchBreak / 8;
    let freeTime = lunchBreak / 4;

    let totalTime = lunchTime + freeTime + movieLenght;
    let diff = Math.abs(totalTime - lunchBreak)
    if (totalTime <= lunchBreak) {
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(diff)} more minutes.`);
    }


}
lunch([`Teen Wolf`, `48`, `60`])