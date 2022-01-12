function tradeCommissions(input) {
    let town = input[0];
    let sells = Number(input[1]);


    let commision = 0;

    if (sells >= 0 && sells <= 500) {
        switch (town) {
            case `Sofia`: commision = sells * 0.05; console.log(commision.toFixed(2)); break;
            case `Varna`: commision = sells * 0.045; console.log(commision.toFixed(2)); break;
            case `Plovdiv`: commision = sells * 0.055; console.log(commision.toFixed(2)); break;
            default: console.log(`error`); break;
        }
    } else if (sells > 500 && sells <= 1000) {
        switch (town) {
            case `Sofia`: commision = sells * 0.07; console.log(commision.toFixed(2)); break;
            case `Varna`: commision = sells * 0.075; console.log(commision.toFixed(2)); break;
            case `Plovdiv`: commision = sells * 0.08; console.log(commision.toFixed(2)); break;
            default: console.log(`error`); break;
        }
    } else if (sells > 1000 && sells <= 10000) {
        switch (town) {
            case `Sofia`: commision = sells * 0.08; console.log(commision.toFixed(2)); break;
            case `Varna`: commision = sells * 0.10; console.log(commision.toFixed(2)); break;
            case `Plovdiv`: commision = sells * 0.12; console.log(commision.toFixed(2)); break;
            default: console.log(`error`); break;
        }
    } else if (sells > 10000) {
        switch (town) {
            case `Sofia`: commision = sells * 0.12; console.log(commision.toFixed(2)); break;
            case `Varna`: commision = sells * 0.13; console.log(commision.toFixed(2)); break;
            case `Plovdiv`: commision = sells * 0.145; console.log(commision.toFixed(2)); break;
            default: console.log(`error`); break;
        }
    } else {
        console.log(`error`)
    }



} tradeCommissions(["Kaspichan",
    "-50"])



