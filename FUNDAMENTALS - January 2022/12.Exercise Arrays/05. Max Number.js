function maxNumber(arr) {
    let newArray = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let isBigger = true;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArray.push(arr[i])
        }
    }
    console.log(newArray.join(` `));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
