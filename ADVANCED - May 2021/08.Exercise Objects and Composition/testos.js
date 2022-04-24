function solve(params) {
  let catalogue = {};
  for (let index = 0; index < params.length; index++) {
    let [productName, productPrice] = params[index].split(` : `);
    productPrice = Number(productPrice);
    let initial = productName[0].toUpperCase();
    if (catalogue[initial] === undefined) {
      catalogue[initial] = {};
    }
    catalogue[initial][productName] = productPrice;
  }

  let result = [];
  let initialsSorted = Object.keys(catalogue).sort((a, b) =>
    a.localeCompare(b)
  );
  for (let el of initialsSorted) {
    let products = Object.entries(catalogue[el]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    result.push(el);
    let productAsString = products.map((x) => `  ${x[0]} :${x[1]}`).join(`\n`);
    result.push(productAsString);
  }
  console.log(result.join(`\n`));
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
