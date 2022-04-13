function solve(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => {
        return b - a;
    });

    while (sorted.length > 0) {
        result.push(sorted.pop());
        result.push(sorted.shift());
    }

    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])