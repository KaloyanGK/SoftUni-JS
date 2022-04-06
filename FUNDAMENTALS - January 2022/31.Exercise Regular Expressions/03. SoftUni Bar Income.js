function solve(input) {
    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/
    let array = [];

    while (input[0] !== `end of shift`) {
        let match = pattern.exec(input[0]);
        if (match !== null) {
            array.push(match.groups);

        }
        input.shift();

    }
    for (let el of array) {
        console.log(el);
    }
    let total = 0;
    for (let el of array) {
        let currentTotal = 0;
        let currentCount = Number(el.count)
        let currentPrice = Number(el.price)
        currentTotal = currentCount * currentPrice;
        total += currentTotal;
        console.log(`${el.name}: ${el.product} - ${currentTotal.toFixed(2)}`);
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']

)