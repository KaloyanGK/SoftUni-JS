function solve(input) {
  let object = {};
  let bottles = {};

  for (let el of input) {
    let [product, qty] = el.split(` => `);
    qty = Number(qty);
    if (!object[product]) {
      object[product] = 0;
    }
    object[product] += qty;

    if (object[product] >= 1000) {
      if (!bottles[product]) {
        bottles[product] = 0;
      }
      bottles[product] += Math.floor(object[product] / 1000);
      object[product] = object[product] % 1000;
    }
  }
  for (let el in bottles) {
    console.log(`${el} => ${bottles[el]}`);
  }
}

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
