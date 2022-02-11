function solve(arr1, arr2) {
    let elementToCut = arr2[0];
    let elementToDel = arr2[1];
    let elementToFind = arr2[2];

    let newArray = arr1.slice(0, elementToCut);
    newArray.splice(0, elementToDel);

    let counter = 0;
    for (let i = 0; i < newArray.length; i++) {
        let currentNum = newArray[i];
        if (currentNum === elementToFind) {
            counter++;

        }

    }
    console.log(`Number ${elementToFind} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);