function charInRage(first, second) {
    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSymbolAsNumber = second.charCodeAt(0);
    let newArray = [];

    let smallestNumber = Math.min(firstSymbolAsNumber, secondSymbolAsNumber)
    let highestNumber = Math.max(firstSymbolAsNumber, secondSymbolAsNumber)
    for (let i = smallestNumber + 1; i < highestNumber; i++) {
        let currentElement = String.fromCharCode(i);
        newArray.push(currentElement)
    }

    console.log(newArray.join(` `));
}
charInRage(`#`, `:`)