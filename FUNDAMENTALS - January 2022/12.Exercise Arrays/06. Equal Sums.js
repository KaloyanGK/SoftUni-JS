function equalSum(arr) {
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumer = arr[leftIndex]
            leftSum += currentNumer;
        }
        for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            let currentNumer = arr[rightIndex];
            rightSum += currentNumer;
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }
    }
    if (!isEqual) {
        console.log(`no`);
    }
} equalSum([1, 2])