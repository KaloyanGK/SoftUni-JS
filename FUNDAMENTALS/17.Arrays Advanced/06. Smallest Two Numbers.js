function smallestTwoNum(arr) {
    let array = arr;
    let smallest = array.sort((a, b) => {
        return a - b
    })
    let sliced = smallest.slice(0, 2)

    console.log(sliced.join(` `))
} smallestTwoNum([30, 15, 50, 5])
smallestTwoNum([3, 0, 10, 4, 7, 3])