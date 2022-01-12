function cinema(input) {

    let vid = input[0];
    let red = Number(input[1]);
    let colona = Number(input[2]);
    let price = 0;
    if (vid == `Premiere`) {
        price = red * colona * 12.00;
    } else if (vid == `Normal`) {
        price = red * colona * 7.50;
    } else if (vid == `Discount`) {
        price = red * colona * 5.00;
    }
    console.log(price.toFixed(2));

} cinema(["Premiere",
    "10",
    "12"])




