function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let char = ``;
    for (let el of sorted) {
        let [product, price] = el.split(` : `);
        if (el[0] !== char) {
            console.log(el[0]); 
            console.log(` ${product}: ${price}`);
            char = el[0];
        } else {
            console.log(` ${product}: ${price}`);
        }
    }
}
solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
