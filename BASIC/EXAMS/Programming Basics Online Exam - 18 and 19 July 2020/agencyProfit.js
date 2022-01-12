function agencyProfit(input){
    let name=input[0];
    let adultsTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultsPrice = Number(input[3]);
    let servicePrice = Number(input[4]);

    let kidsPrice = adultsPrice - (adultsPrice * 0.7);
    let totalAdults = adultsPrice + servicePrice;
    let totalKids = kidsPrice + servicePrice;
    totalPrice = (adultsTickets * totalAdults ) + (kidsTickets *totalKids);
    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)

}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

