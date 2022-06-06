function solve(num) {
  let numToString = num.toString();
  let result = 0;
  let flag = true;

  for (let i = 0; i < numToString.length-1; i++) {
    let first = numToString[i];
    let next = numToString[i + 1];

    if (first !== next) {
      flag = false;
    }

  }
  for (let el of numToString) {
    result += +el;
  }
  console.log(flag);
  console.log(result);

}
solve(222);
