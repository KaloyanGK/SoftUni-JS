function solve() {
  let object = {};
  Array.from(arguments).forEach((el) => {
    let type = typeof el;
    console.log(`${type}: ${el}`);
    if (!object[type]) {
      object[type] = 0;
    }
    object[type] += 1;
  });

  Object.entries(object).sort((a, b) => {
    return b[1] - a[1];
  })
    .forEach((el) => { console.log(`${el[0]} = ${el[1]}`); });
}

solve("cat", 42, function () {
  console.log("Hello world!");
});
