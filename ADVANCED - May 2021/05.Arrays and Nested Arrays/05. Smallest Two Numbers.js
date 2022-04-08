function solve(params) {
    let sorted = params.sort((a, b) => a - b);
    let smallesTwo = sorted.splice(0, 2);
    console.log(smallesTwo.join(` `));
}
solve([30, 15, 50, 5])