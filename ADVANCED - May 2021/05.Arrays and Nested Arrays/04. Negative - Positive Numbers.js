function solve(params) {
  let array = [];
  for (el of params) {
    el = Number(el);
    if (el < 0) {
      array.unshift(el);
    } else {
      array.push(el);
    }
  }
  console.log(array.join(`\n`));
}
solve([7, -2, 8, 9]);
