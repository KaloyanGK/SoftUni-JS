function solve(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let currentNum = arr[index];
    if (index % 2 == 1) {
      currentNum *= 2;
      newArr.push(currentNum);
    }
  }

  console.log(newArr.reverse().join(` `));
}
solve([10, 15, 20, 25]);
console.log(`----`);
solve([3, 0, 10, 4, 7, 3]);
