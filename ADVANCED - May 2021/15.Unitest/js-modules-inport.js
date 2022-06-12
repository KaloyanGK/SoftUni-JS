
//импортваме функцията в друг файл

let { sum, minus, arr, print } = require(`./js-modules-export`)
console.log(sum(5, 5));
console.log(minus(5, 5));
print()
arr = arr.filter(el => el > 0);
console.log(arr);



//тук променивата може да е с каквото има искаме