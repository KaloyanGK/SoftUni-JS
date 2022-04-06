function series(input) {
    let budget = Number(input[0]);

    let movieNumber = Number(input[1]);
    let movieName = ``;
    let moviePrice = 0;
    let totalPrice = 0;

    for (let i = 2; i < input.length; i++) {
        movieName = input[i++]
        moviePrice = Number(input[i])
        if (movieName === `Thrones`) {
            moviePrice = moviePrice / 2;
        } else if (movieName === `Lucifer`) {
            moviePrice = moviePrice * 0.6;
        } else if (movieName === `Protector`) {
            moviePrice = moviePrice * 0.7;
        } else if (movieName === `TotalDrama`) {
            moviePrice = moviePrice * 0.8;
        } else if (movieName === `Area`) {
            moviePrice = moviePrice * 0.9;
        }
        totalPrice += moviePrice;
    }
    let diff = Math.abs(budget - totalPrice)
    if (budget >= totalPrice) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }

} series
    // ([`10`, `3`, `Thrones`, `5`, `Riverdale`, `5`, `Gotham`, `2`])

    ([`25`, `6`, `Teen Wolf`, `8`, `Protector`, `5`, `TotalDrama`, `5`, `Area`, `4`, `Thrones`, `5`, `Lucifer`, `9`])