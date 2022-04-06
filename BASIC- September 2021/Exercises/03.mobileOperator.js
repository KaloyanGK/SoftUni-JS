function demo(input) {

    let srok = input[0];
    let type = input[1];
    let mobileNet = input[2];
    let meseci = Number(input[3]);
    let price = 0;
    if (srok === `one`) {
        switch (type) {
            case `Small`: price = 9.98; break;
            case `Middle`: price = 18.99; break;
            case `Large`: price = 25.98; break;
            case `ExtraLarge`: price = 35.99; break;
        }
    } else if (srok === `two`) {
        switch (type) {
            case `Small`: price = 8.58; break;
            case `Middle`: price = 17.09; break;
            case `Large`: price = 23.59; break;
            case `ExtraLarge`: price = 31.79; break;
        }
    }
    if (mobileNet === `yes`) {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }
    if (srok === `two`) {
        price = price * 96.25 / 100;
    }
    let totalPrice = price * meseci;


    console.log(`${totalPrice.toFixed(2)} lv.`);
}
demo([`two`, `ExtraLarge`, `yes`, `20`])