function pastryShop(input) {

    let desert = input[0];
    let desertPce = Number(input[1]);
    let day = Number(input[2]);

    let price = 0

    if (day <= 15) {
        switch (desert) {
            case `Cake`: price = desertPce * 24; break;
            case `Souffle`: price = desertPce * 6.66; break;
            case `Baklava`: price = desertPce * 12.6; break;
        }
    } else {
        switch (desert) {
            case `Cake`: price = desertPce * 28.7; break;
            case `Souffle`: price = desertPce * 9.8; break;
            case `Baklava`: price = desertPce * 16.98; break;
        }
    }
    if (day <= 22) {
        if (price >= 100 && price <= 200) {
            price -= price * 0.15;
        }
        else if (price > 200) {
            price -= price * 0.25;
        }
    }
    if (day <= 15) {
        price -= price * 0.10;
    }

    console.log(price.toFixed(2));



} pastryShop(["Cake",
    "10",
    "15"])







