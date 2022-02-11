function firstAndLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let sum = first + last;
    console.log(sum);
}
firstAndLast(['20', '30', '40'])
firstAndLast(['5', '10'])