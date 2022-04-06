function computerFirm(input) {

    let index = 0;
    let quantity = Number(input[index]);
    index++;
    let counter = 0;
    let sales = 0;
    let salesTotal = 0;
    let ratingCount = 0
    for (let i = 0; i < quantity; i++) {
        counter++;
        let num = Number(input[index]);
        let rating = num % 10;
        let possSales = num - rating;
        possSales = Math.floor(num / 10);
        sales = possSales;
        ratingCount += rating;
        if (rating === 2) {
            sales = possSales * 0;
            salesTotal += sales;
        } else if (rating === 3) {
            sales = possSales * 0.5;
            salesTotal += sales;
        } else if (rating === 4) {
            sales = possSales * 0.7;
            salesTotal += sales;
        } else if (rating === 5) {
            sales = possSales * 0.85;
            salesTotal += sales;
        } else {
            sales = possSales * 1;
            salesTotal += sales;
        }
    }
    let average = ratingCount / counter;
    console.log(`${salesTotal.toFixed(2)}`);
    console.log(`${average.toFixed(2)}`);
}
computerFirm(["3", "103", "103", "103"])