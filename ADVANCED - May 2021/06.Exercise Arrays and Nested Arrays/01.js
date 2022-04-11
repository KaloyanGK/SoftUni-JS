let arr = [10, 22, 45, 66, 9, 2, 222]
let filtered = arr.filter((el) => {
    return el > 10
});
let mapped = arr.map(function (el) {
    return el + 5
});

console.log(mapped);
console.log(filtered);