function solve(input) {
    let index = 0;
    let currentSum = input[index];
    let sum = 0;
    while (currentSum !== `special` && currentSum !== `regular`) {
        let currPrice = Number(currentSum);
        if (currPrice < 0) {
            console.log(`Invalid price!`);
            index++
            currentSum = input[index];
        } else {
            sum += currPrice;
            index++
            currentSum = input[index];
        }

    }
    if (sum <= 0) {
        console.log(`Invalid order!`);
        return;
    }
    let priceAfterTax = (sum * 0.2)
    let totalPrice = sum + priceAfterTax;
    if (currentSum == `special`) {
        totalPrice = (totalPrice * 0.9)
    } else {
        totalPrice = totalPrice;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${priceAfterTax.toFixed(2)}$`)
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);


}

solve(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)
