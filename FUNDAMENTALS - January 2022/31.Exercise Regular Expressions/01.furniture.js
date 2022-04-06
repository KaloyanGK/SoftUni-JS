function solve(input) {
  let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
  let totalPrice = 0;
  let products = [];
  while (input[0] !== `Purchase`) {
    let match = pattern.exec(input[0]);
    if (match !== null) {
      let name = match.groups.product;
      products.push(name);
      let price = Number(match.groups.price);
      let quantity = Number(match.groups.qty);
      totalPrice += price * quantity;
    }
    input.shift();
  }
  if (products.length >= 1) {
    console.log(`Bought furniture:`);
    console.log(products.join(`\n`));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
  } else {
    console.log("Bought furniture:");
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
  }
}
solve([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
