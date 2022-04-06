function miningRing(input) {

    let videoCardPrice = Number(input[0]);
    let prehodnikPrice = Number(input[1]);
    let elecricityPerDay = Number(input[2]);
    let profitPerDay = Number(input[3]);
    let parts = 1000;

    let totalCardPrice = videoCardPrice * 13;
    let totalPredhodnikPrice = prehodnikPrice * 13;
    let totalSpendMoney = totalCardPrice + totalPredhodnikPrice + parts;

    let pureProfit = profitPerDay - elecricityPerDay;
    let totalCardProfit = pureProfit * 13;

    let profitDays = totalSpendMoney / totalCardProfit;

    console.log(totalSpendMoney);
    console.log(Math.ceil(profitDays));

} miningRing(["700",
    "15",
    "0.20",
    "2"])
