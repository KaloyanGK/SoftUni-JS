function solve(params) {
  let words = params.shift().split(` `);
  let object = {};
  for (let el of words) {
    object[el] = 0;
  }
  console.log(object);
  for (let el of params) {
    if (object.hasOwnProperty(el)) {
      object[el] += 1;
    }
  }
  let sorted = Object.entries(object);
  sorted.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let el of sorted) {
    console.log(`${el[0]} - ${el[1]}`);
  }
}
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
