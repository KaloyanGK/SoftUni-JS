function demo(input) {

    let name = input[0]
    let ticketOld = Number(input[1])
    let ticketKids = Number(input[2])
    let priceOld = Number(input[3])
    let serviceTax = Number(input[4])
    let kidsPrice = priceOld * 0.3;
    


     let profit = (((priceOld + serviceTax) * ticketOld) + ((kidsPrice + serviceTax) * ticketKids)) * 0.2;

     console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);

    
} demo(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])
