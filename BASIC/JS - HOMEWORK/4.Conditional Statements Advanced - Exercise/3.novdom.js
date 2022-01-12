function novDom(input) {


    let flower = input[0];
    let pcs = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;


    switch (flower) {
        case `Roses`:
            price = pcs * 5.00
            if (pcs > 80) {
                price = price * 0.9;
            }
            break;

        case `Dahlias`:
            price = pcs * 3.80;
            if (pcs > 90) {
                price = price * 0.85
            }
            break;
        case `Tulips`:
            price = pcs * 2.80;
            if (pcs > 80) {
                price = price * 0.85
            }
            break;
        case `Narcissus`:
            price = pcs * 3;
            if (pcs < 120) {
                price = price * 1.15
            }
            break;
        case `Gladiolus`:
            price = pcs * 2.50;
            if (pcs < 80) {
                price = price * 1.20;
            }
            break;
    }
    let diff = Math.abs(price - budget);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${pcs} ${flower} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
} novDom(["Tulips",
    "88",
    "260"])


