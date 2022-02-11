function magicSum(arr, num) {

    let arrayLength = arr.length;
    let magicNumber = num;
    for (let i = 0; i < arrayLength; i++) {
        let sum = 0;
        let firstNumber = arr[i];
        for (let j = i + 1; j < arrayLength; j++) {
            let secondNumber = arr[j];
            sum = firstNumber + secondNumber;
            if (sum === magicNumber) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }

    }
} magicSum([14, 20, 60, 13, 7, 19, 8], 27);