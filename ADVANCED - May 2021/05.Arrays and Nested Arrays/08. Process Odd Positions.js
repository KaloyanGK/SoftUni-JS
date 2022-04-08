function solve(arr) {
    return arr.filter((a, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
   
}


solve([10, 15, 20, 25])
console.log(`----`);
solve([3, 0, 10, 4, 7, 3])