function movieProfit(input) {


    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let tickerPriceForDay = tickets * ticketPrice;
    let totalTicketPrice = tickerPriceForDay * days;

    let cinemaProfit = totalTicketPrice * percent / 100;
    let totalMovieProfit = totalTicketPrice - cinemaProfit;



    console.log(`The profit from the movie ${movieName} is ${totalMovieProfit.toFixed(2)} lv.`);



} movieProfit([`Python Basics `, `40`, `34785`, `10.45`, `14`]);
