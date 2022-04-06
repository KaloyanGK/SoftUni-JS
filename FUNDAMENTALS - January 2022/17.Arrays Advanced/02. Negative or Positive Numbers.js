function negativeOrPositive(arr) {
    let newArray = [];
    for (let el of arr) {
        el = Number(el)
        if (el < 0) {
            newArray.unshift(el);
        } else {
            newArray.push(el);
        }
    }

    console.log(newArray.join(`\n`));
}
negativeOrPositive(["7", "-2", "8", "9"]);
console.log(`------`);
negativeOrPositive(["3", "-2", "0", "-1"]);
