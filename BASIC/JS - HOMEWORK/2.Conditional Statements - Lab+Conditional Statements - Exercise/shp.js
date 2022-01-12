function shoping(input) {
 
    let money = Number(input[0]);
    let video = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
 
    let videoPrize = video * 250;
    let processorPrize = videoPrize - (videoPrize * 0.65);
    let processorFinalPrize = processors * processorPrize;
    let ramPrize = videoPrize - (videoPrize * 0.90);
    let ramFinalPrize = ram * ramPrize;
    let allSummary = videoPrize + processorFinalPrize + ramFinalPrize;
 
    if (video > processors) {
        allSummary = allSummary - (allSummary * 0.15).toFixed(2);
    }
 
    if (allSummary <= money) {
        console.log(`You have ${(money - allSummary).toFixed(2)} leva left!`);
    } else if (allSummary > money) {
        console.log(`Not enough money! You need ${(allSummary - money).toFixed(2)} leva more!`);
    }
}
shoping(["920.45", "3", "1", "1"])