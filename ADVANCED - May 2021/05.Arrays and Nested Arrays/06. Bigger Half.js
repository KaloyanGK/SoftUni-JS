function solve(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    let result = arr.slice(middle);
    // return result;
    console.log(result);
}

solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])