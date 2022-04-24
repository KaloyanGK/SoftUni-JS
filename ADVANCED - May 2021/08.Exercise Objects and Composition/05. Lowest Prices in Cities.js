function solve(input) {
  let object = {};
  for (let el of input) {
    el = el.split(` | `);
    let currTown = el[0];
    let currProduct = el[1];
    let currPrice = Number(el[2]);
    if (!object.hasOwnProperty(currProduct)) {
      object[currProduct] = {
        city: currTown,
        price: currPrice,
      };
    } else {
      if (currPrice < object[currProduct].price) {
        object[currProduct].price = currPrice;
        object[currProduct].city = currTown;
      }
    }
  }
  for (let el in object) {
    console.log(`${el} -> ${object[el].price} (${object[el].city})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
