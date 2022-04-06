function solve(text) {

    let firstPart = text.substring(0, text.length / 2);

    let firstReversed = firstPart.split(``).reverse().join(``)

    console.log(firstReversed);

    let secondPart = text.substring(text.length / 2);
    let secondReversed = secondPart.split(``).reverse().join(``)

    console.log(secondReversed);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')