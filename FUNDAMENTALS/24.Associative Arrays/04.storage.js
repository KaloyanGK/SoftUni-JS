function solve(arr) {
    let list = new Map();

    for (let el of arr) {
        let tokens = el.split(` `);
        let product = tokens[0];
        let count = Number(tokens[1]);

        if (list.has(product)) {
            let newCount = list.get(product) + count;
            list.set(product, newCount);
        } else {
            list.set(product, count);
        }

    }
 
    for (let el of list) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)