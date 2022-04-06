function solve(input) {
    let object = {};
    for (let i = 0; i < input.length; i += 2) {
        let resources = input[i];
        let qty = Number(input[i + 1]);
        if (object.hasOwnProperty(resources)) {
            let newQty = object[resources] + qty
            object[resources] = newQty;
        } else {
            object[resources] = qty;

        }

    }
    for (let el in object) {
        console.log(`${el} -> ${object[el]}`);
    }

}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]

)