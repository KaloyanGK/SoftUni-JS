function poolDay(input) {
    let people = Number(input[0]);
    let ticket = Number(input[1]);
    let shezlongPrice = Number(input[2]);
    let umbrelaPrice = Number(input[3]);

    totalTicketPrice = people * ticket; //Cena na vsichki bileti

    totalShezlong = Math.ceil(people * 0.75)

    totalShezlongPrice = (totalShezlong * shezlongPrice);//cena na vsichki shezlonzi

    umbrelaCount = Math.ceil(people * 0.5);

    totalUmbrelaPrice = (umbrelaCount * umbrelaPrice); // cena na vsichki chaduri

    let totalCosts = totalTicketPrice + totalShezlongPrice + totalUmbrelaPrice;
    console.log(`${totalCosts.toFixed(2)} lv.`)


} poolDay(["100", "8", "6", "4"]);

