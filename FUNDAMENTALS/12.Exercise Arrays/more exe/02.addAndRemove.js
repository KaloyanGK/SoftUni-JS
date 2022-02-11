function addAndRemove(arr) {
    let firstArray = arr;
    let secondArray = [];
    let firstArrayLength = firstArray.length;
    for (let i = 0; i < firstArrayLength; i++) {
        let currentCommand = firstArray[i];
        if (currentCommand == `remove`) {
            secondArray.pop()
        } else if (currentCommand == `add`) {
            secondArray.push(i + 1)
        }
    }
    if (secondArray.length <= 0) {
        console.log(`Empty`);
    } else {
        console.log(secondArray.join(` `));
    }
}
addAndRemove(['remove', 'remove', 'remove']);