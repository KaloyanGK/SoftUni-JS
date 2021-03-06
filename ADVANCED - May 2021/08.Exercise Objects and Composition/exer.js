function solve(input) {
    let sorted = input.sort((a, b) => {
        return a.localeCompare(b)
    })
    let match = ``;

    for (let el of sorted) {
        let [name, price] = el.split(` : `);
        if (el[0] !== match) {
            console.log(el[0]);
            console.log(` ${name}: ${price}`);
            match = el[0];
        } else {
            console.log(` ${name}: ${price}`);
        }

    }


}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
