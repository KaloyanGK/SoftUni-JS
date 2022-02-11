function addAndSubtract(arr) {
    let arrayLength = arr.length;
    let newArr = [];
    let sum = 0;
    let newArrSum = 0;
    let newArrEl = 0;


    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = arr[i];
        sum += currentNumber
        if (currentNumber % 2 === 0) {
            newArrEl = (currentNumber + i);
        } else {
            newArrEl = (currentNumber - i)
        }
        newArr.push(newArrEl)
        newArrSum += newArrEl;


    }
    console.log(newArr);
    console.log(sum)
    console.log(newArrSum);
} addAndSubtract([5, 15, 23, 56, 35])