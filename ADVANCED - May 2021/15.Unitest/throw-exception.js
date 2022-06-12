function solve() {

    let sum = 5 + 4;
    // let sum = 5 + 5; 

    if (sum < 10) {
        throw new Error(`Числото е под 0`);
    }
    return sum

}
let result = solve();
console.log(result);

// try {
//     Number;
// }
// catch {

// }
