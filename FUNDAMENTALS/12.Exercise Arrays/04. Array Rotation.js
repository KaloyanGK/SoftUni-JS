function arrayRotation(arr, n) {
    let arrayOfNumbers = arr;

    for (let i = 0; i < n; i++) {
        let numberToPush = arrayOfNumbers.shift();
        arrayOfNumbers.push(numberToPush)

    }

    console.log(arrayOfNumbers.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4)
