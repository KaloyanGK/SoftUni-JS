function solve(input) {
    let text = ``;
    let sum = 0;
    let inverse = 0;
    for (let el of input) {
        text += el;
        sum += el;
        inverse += 1 / el;
    }
    console.log(sum);
    console.log(inverse);
    console.log(text);
}
solve([1, 2, 3])