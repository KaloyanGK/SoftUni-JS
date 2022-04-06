function aluminum(input) {

    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;
    if (count < 10) {
        console.log(`Invalid order`);
        return;
    } else {
        switch (type) {
            case '90X130':
                price = count * 110;
                if (count > 30 && count <= 60) {
                    price *= 0.95;
                } else if (count > 60) {
                    price *= 0.92;
                }
                break;
            case '100X150':
                price = count * 140;
                if (count > 40 && count <= 80) {
                    price *= 0.94;
                } else if (count > 80) {
                    price *= 0.9;
                }
                break;
            case '130X180':
                price = count * 190;
                if (count > 20 && count <= 50) {
                    price *= 0.93;
                } else if (count > 50) {
                    price *= 0.88;
                }
                break;
            case '200X300':
                price = count * 250;
                if (count > 25 && count <= 50) {
                    price *= 0.91;
                } else if (count > 50) {
                    price *= 0.86;
                }
                break;
        }
    }
    if (delivery === `With delivery`) {
        price += 60;
    } else if (delivery === `Without delivery`) {
        price = price;
    }
    if (count > 99) {
        price = price * 0.96;

    }

    console.log(`${price.toFixed(2)} BGN`);

}
aluminum(["40", "90X130", "Without delivery"])

