function fruitShop(input) {

    let fruit = input[0]
    let day = input[1];
    let pcs = input[2];
    let sum = 0;
    if (day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`)
        switch (fruit) {
            case `banana`: sum = pcs * 2.50; console.log(sum.toFixed(2)); break;
            case `apple`: sum = pcs * 1.20; console.log(sum.toFixed(2)); break;
            case `orange`: sum = pcs * 0.85; console.log(sum.toFixed(2)); break;
            case `grapefruit`: sum = pcs * 1.45; console.log(sum.toFixed(2)); break;
            case `kiwi`: sum = pcs * 2.70; console.log(sum.toFixed(2)); break;
            case `pineapple`: sum = pcs * 5.50; console.log(sum.toFixed(2)); break;
            case `grapes`: sum = pcs * 3.85; console.log(sum.toFixed(2)); break;
            default: console.log(`error`);

        } else if (day === `Saturday` || day === `Sunday`)
        switch (fruit) {
            case `banana`: sum = pcs * 2.70; console.log(sum.toFixed(2)); break;
            case `apple`: sum = pcs * 1.25; console.log(sum.toFixed(2)); break;
            case `orange`: sum = pcs * 0.90; console.log(sum.toFixed(2)); break;
            case `grapefruit`: sum = pcs * 1.60; console.log(sum.toFixed(2)); break;
            case `kiwi`: sum = pcs * 3.00; console.log(sum.toFixed(2)); break;
            case `pineapple`: sum = pcs * 5.60; console.log(sum.toFixed(2)); break;
            case `grapes`: sum = pcs * 4.20; console.log(sum.toFixed(2)); break;
            default: console.log(`error`);

        } else {
        console.log(`error`)
    }


}
fruitShop(["grapes",
    "Monday",
    "1"])






















