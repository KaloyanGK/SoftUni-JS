function easterTrip(input) {

    let destination = input[0];
    let date = input[1];
    let days = input[2];
    let price = 0;

    if (destination === `Germany`) {
        switch (date) {
            case "21-23": price = days * 32; break;
            case `24-27`: price = days * 37; break;
            case `28-31`: price = days * 43; break;
        }
    } else if (destination === `France`) {
        switch (date) {
            case `21-23`: price = days * 30; break;
            case `24-27`: price = days * 35; break;
            case `28-31`: price = days * 40; break;
        }
    } else if (destination === `Italy`) {
        switch (date) {
            case `21-23`: price = days * 28; break;
            case `24-27`: price = days * 32; break;
            case `28-31`: price = days * 39; break;
        }

    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);



} easterTrip(["Italy", "21-23", "7"])