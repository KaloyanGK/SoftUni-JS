function solve(arr) {


    let smallest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= smallest) {
            newArr.push(arr[i]);
            smallest = arr[i];
        }
    }
    return newArr;
}
solve([20,
    3,
    2,
    15,
    6,
    1]
);