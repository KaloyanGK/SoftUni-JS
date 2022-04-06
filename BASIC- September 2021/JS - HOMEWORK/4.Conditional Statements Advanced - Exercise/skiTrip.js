function skiTrip(input) {

    let days = Number(input[0]);
    let place = input[1];
    let ocenka = input[2];


    let noshtyvki = days - 1;
    let price = 0;
    if (noshtyvki < 10) {
        switch (place) {
            case `room for one person`:
                price = noshtyvki * 18;
                break;
            case `apartment`:
                price = (noshtyvki * 25) * 0.7;
                break;
            case `president apartment`:
                price = (noshtyvki * 35) * 0.9;
                break;
        }

    } else if (noshtyvki >= 10 && noshtyvki <= 15) {
        switch (place) {
            case `room for one person`:
                price = noshtyvki * 18;
                break;
            case `apartment`:
                price = (noshtyvki * 25) * 0.65;
                break;
            case `president apartment`:
                price = (noshtyvki * 35) * 0.85
                break;
        }

    } else if (noshtyvki > 15) {
        switch (place) {
            case `room for one person`:
                price = noshtyvki * 18;
                break;
            case `apartment`:
                price = (noshtyvki * 25) * 0.50;
                break;
            case `president apartment`:
                price = (noshtyvki * 35) * 0.8;
                break;
        }
    }
    if (ocenka === `positive`) {
        price = price * 1.25;
    } else if (ocenka === `negative`) {
        price = price * 0.9;
    }
    console.log(price.toFixed(2))

} skiTrip(["2",
    "apartment",
    "positive"])



