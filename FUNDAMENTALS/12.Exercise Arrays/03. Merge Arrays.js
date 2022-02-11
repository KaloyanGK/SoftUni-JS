function mergeArrays(arr1, arr2) {
    let arrOneLength = arr1.length;
    let separator = ` - `;
    let newArr = [];
    for (let i = 0; i < arrOneLength; i++) {
        if (i % 2 == 0) {
            newArr.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            newArr.push(`${arr1[i]}${arr2[i]}`);
        }

    }
    console.log(newArr.join(separator));
} mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);



