function solution(input) {

    let onStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,

        }
    }
    let functions = {
        restock,
        prepare,
        report,
    }

    function manager(input) {
        let [func, element, qty] = input.split(` `);
        return functions[func](element, qty);

    }
    function restock(microelement, qty) {
        onStock[microelement] += Number(qty);
        return `Success`
    }
    function prepare(currentRecepie, qty) {
        qty = Number(qty);
        let recipe = Object.entries(recipes[currentRecepie]);

        recipe.forEach(el => el *= qty);

        for (let [ingredient, qty] of recipe) {
            if (onStock[ingredient] < qty) {
                return `Error: not enough ${ingredient} in stock`
            }
        }
        recipe.forEach(([ingredient, qty]) => onStock[ingredient] -= qty);
        return `Success`

    }
    function report() {
        return `protein=${onStock.protein} carbohydrate=${onStock.carbohydrate} fat=${onStock.fat} flavour=${onStock.flavour}`
    }
    return manager;

}




let manager = solution()
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager(`restock carbohydrate 10`));
console.log(manager(`restock flavour 10`));
console.log(manager(`prepare apple 1`));
console.log(manager(`restock fat 10`));
console.log(manager(`prepare burger 1`));
console.log(manager(`report`));

