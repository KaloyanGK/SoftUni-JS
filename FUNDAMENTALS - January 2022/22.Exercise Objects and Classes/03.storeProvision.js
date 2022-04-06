function solve(currentStocks, stocksForDelivery) {
  let storeProducts = {};
  let currentL = currentStocks.length;
  for (let i = 0; i < currentL; i += 2) {
    let product = currentStocks[i];
    storeProducts[product] = Number(currentStocks[i + 1]);
  }
  let forDeliveryL = stocksForDelivery.length;
  for (let i = 0; i < forDeliveryL; i += 2) {
    let product = stocksForDelivery[i];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    }
    storeProducts[product] += Number(stocksForDelivery[i + 1]);
  }
  for (let el in storeProducts) {
    console.log(`${el} -> ${storeProducts[el]}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
