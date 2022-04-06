function kNumbers(arr) {
    let number = arr.shift();

    console.log(arr.slice(0, number).join(` `));
    console.log(arr.slice(-number).join(` `));
}
kNumbers([2, 7, 8, 9])
kNumbers([3, 6, 7, 8, 9])


