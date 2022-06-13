function getFibonator() {
  let arr = [0, 1];

  return function () {
    let startingNum = arr.shift();
    let nextNum = arr.pop();
    arr.push(nextNum, startingNum + nextNum);
    return arr[0];
  };
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
