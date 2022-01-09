function demo(input) {
    let index = 0;
    let customers = Number(input[index]);
    index++;

    let command = input[index];
    let priceOfProducts = 0;
    let totalProductPrice = 0;
    for (let i = 0; i < customers; i++) {
        let product = '';
        let productCounter = 0;
        let currentProductPrice = 0;
        while (command !== `Finish`) {
            productCounter++;
            product = input[index];
            switch (product) {
                case `basket`: priceOfProducts = 1.50; break;
                case `wreath`: priceOfProducts = 3.80; break;
                case `chocolate bunny`: priceOfProducts = 7; break;
            }
            currentProductPrice += priceOfProducts;

            index++;
            command = input[index];
        }
        if (productCounter % 2 === 0) {
            currentProductPrice = currentProductPrice - (currentProductPrice * 0.2)
        }
        if (command === `Finish`) {
            console.log(`You purchased ${productCounter} items for ${currentProductPrice.toFixed(2)} leva.`);
        }
        totalProductPrice += currentProductPrice;
        index++;
        command = input[index];
    }
    let avaragePrice = totalProductPrice / customers;
    console.log(`Average bill per client is: ${avaragePrice.toFixed(2)} leva.`);

} demo(["2", "basket", "wreath", "chocolate bunny",
    "Finish", "wreath", "chocolate bunny",
    "Finish"])