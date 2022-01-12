function lunchBreak(input) {
 
    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);
 
    let lunchTime = breakTime * 1 / 8;
    let chillTime = breakTime * 1 / 4;
    let leftTime = breakTime - (lunchTime + chillTime);
 
    if (episodeTime <= leftTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - leftTime)} more minutes.`);
   }
}
lunchBreak(["Teen Wolf", "48", "60"]);
