function solve(length, previousNumbers) {
    let resultArr = [1];
    for (let index = 1; index <= length - 1; index++) {
        let start = index - previousNumbers < 0 ? 0 : index - previousNumbers;
        let sum = resultArr.slice(start, index).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        resultArr.push(sum);
    }

    // for (let index = 1; index <= length - 1; index++) {
    //     let sum = 0;
    //     let currIndex = index - 1;
    //     for (let i = 1; i <= previousNumbers; i++) {
    //         let number = resultArr[currIndex] == undefined ? 0 : resultArr[currIndex];
    //         currIndex--;
    //         sum += number;
    //     }
    //     resultArr.push(sum);
    // }
    console.log(resultArr);
}
solve(6, 3)