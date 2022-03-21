function solve(input) {
  let result = {};
  for (let line of input) {
    let tokens = line.split(`:`);
    let name = tokens[0];
    let address = tokens[1];

    result[name] = address;
  }

  let sorted = Object.entries(result);
  sorted.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let el of sorted) {
    console.log(`${el[0]} -> ${el[1]}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
