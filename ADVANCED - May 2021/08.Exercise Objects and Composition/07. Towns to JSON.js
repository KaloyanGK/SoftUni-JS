function solve(input) {
  let arr = [];

  let [a, b, c] = input.shift().slice(2, -2).split(` | `);

  for (let el of input) {
    let object = {};

    let [currTown, currLatitute, currLongtitude] = el.slice(2, -2).split(` | `);

    object[a] = currTown;
    object[b] = Number(Number(currLatitute).toFixed(2));
    object[c] = Number(Number(currLongtitude).toFixed(2));

    arr.push(object);
  }

  console.log(JSON.stringify(arr));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
// let [town, Latitude, Longitude] = input.shift().slice(2, -2).split(` | `);
