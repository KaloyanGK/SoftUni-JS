function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let order = Number(input[2]);
    let price = 0;
    if (size === `small`)
        switch (fruit) {
            case `Watermelon`: price = (56 * 2) * order; break;
            case `Mango`: price = (36.66 * 2) * order; break;
            case `Pineapple`: price = (42.10 * 2) * order; break;
            case `Raspberry`: price = (20 * 2) * order; break;
        } else {
        switch (fruit) {
            case `Watermelon`: price = (28.70 * 5) * order; break;
            case `Mango`: price = (19.60 * 5) * order; break;
            case `Pineapple`: price = (24.80 * 5) * order; break;
            case `Raspberry`: price = (15.20 * 5) * order; break;
        }

    }
    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
    } else if (price > 1000) {
        price = price * 0.5;

    }

    console.log(`${price.toFixed(2)} lv.`);
} energyBooster([`Raspberry`, `small`, `50`]);