function solve(input) {
    let pattern = /\w+/g;
    let result = input.match(pattern)
    let finalResult = ``;
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].toUpperCase()
        if (i < result.length - 1) {
            finalResult += result[i] + `, `
        } else {
            finalResult += result[i]
        }
    }
    console.log(finalResult);
}
solve(`Hello`)