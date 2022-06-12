
//експортваме функция в друг файл - В случая във файла js-modules-inport.js
function sum(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
let arr = [1, 2, -2, 3, -5];
function print() {
    console.log(arr);
}
module.exports = {
    sum,
    minus,
    arr,
    print,
}

//освен функция, можем да експортнем обкет,масиви,променливи и т.н.