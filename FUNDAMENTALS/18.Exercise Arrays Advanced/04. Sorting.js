function sorting(arr) {
  let result = [];
  let sorted = arr.sort((a, b) => {
    return a - b;
  });

  while (sorted.length > 0) {
    result.push(sorted.pop());
    result.push(sorted.shift());
  }

  console.log(result.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
