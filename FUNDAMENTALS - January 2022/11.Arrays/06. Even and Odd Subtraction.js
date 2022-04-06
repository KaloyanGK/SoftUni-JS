function evenAndOdd(arr) {

    let sumOfOdd = 0;
    let sumOfEven = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (num % 2 === 0) {
            sumOfEven += num
        } else {
            sumOfOdd += num
        }
    }
    let diff = sumOfEven - sumOfOdd;
    console.log(diff);

} evenAndOdd([2, 4, 6, 8, 10])