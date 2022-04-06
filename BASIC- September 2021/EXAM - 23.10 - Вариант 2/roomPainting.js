function roomPaiting(input) {
    let paintPcs = Number(input[0]);
    let tapetPcs = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let glovesPcs = Math.ceil(tapetPcs * 0.35);
    let brushPcs = Math.floor(paintPcs * 0.48);

    let totalPrice = (paintPcs * 21.50) + (tapetPcs * 5.20) + (glovesPcs * glovesPrice) + (brushPcs * brushPrice);
    let deliveryPrice = totalPrice / 15;
    console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);

} roomPaiting([`1`, `3`, `10.9`, `1`])