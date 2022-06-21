function solve(input) {
    let object = {};

    for (let el of input) {
        let [brand, model, qty] = el.split(` | `);
        qty = Number(qty)
        if (!object.hasOwnProperty(brand)) {
            object[brand] = {}
        }
        if (!object[brand].hasOwnProperty(model)) {
            object[brand][model] = 0;
        }

        object[brand][model] += qty;

    }
    for (let el in object) {
        console.log(el);
        Object.entries(object[el]).forEach(el => {
            console.log(`###${el[0]} -> ${el[1]}`);
        });;
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)