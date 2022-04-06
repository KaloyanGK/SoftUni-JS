function solve(fruit, weight, price) {
    let weigthInKg = weight / 1000;
    let totalPrice = price * weigthInKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('apple', 1563, 2.35)