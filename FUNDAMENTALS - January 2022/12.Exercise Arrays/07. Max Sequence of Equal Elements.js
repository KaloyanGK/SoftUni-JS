function maxSequence(arr) {
    let newArray = [];
    let currentArray = [];

    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        currentArray = [];
        let currentElement = arr[i];
        for (let k = i; k < arr.length; k++) {
            let nextElement = arr[k];
            if (currentElement == nextElement) {
                currentArray.push(currentElement);
            } else {
                break;
            }
            if (currentArray.length > newArray.length) {
                newArray = currentArray;
            }
        }
    }
    console.log(newArray.join(` `));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
