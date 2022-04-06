function solve(num) {
  let numToString = num.toString();
  let result = 0;
  let flag = true;
  for (let i = 0; i < numToString.length; i++) {
    let first = numToString[i];
    let next = numToString[i + 1];
    if (next == `string`) {
      if (first !== next) {
        flag = false;
        console.log(`false`);
        break;
      }
    }
  }
  if (flag) {
    console.log(`true`);
  }
  for (let el of numToString) {
    result += +el;
  }
  console.log(result);
}
solve(2222222);
