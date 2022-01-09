function toyShop(input) {
  let ekskurzia = Number(input[0]);
  let puzlePcs = Number(input[1]);
  let kykliPcs = Number(input[2]);
  let mechePcs = Number(input[3]);
  let minPcs = Number(input[4]);
  let kamionPcs = Number(input[5]);

  let total =
    puzlePcs * 2.6 +
    kykliPcs * 3 +
    mechePcs * 4.1 +
    minPcs * 8.2 +
    kamionPcs * 2;
  let totalpcs = puzlePcs + kykliPcs + mechePcs + minPcs + kamionPcs;
  if (totalpcs >= 50) {
    discount = total - (total * 0.75);
  } else {
    discount = 0;
  }
  let finalPrice = total - discount;
  let storeRent = finalPrice - (finalPrice * 0.9);
  let profit = finalPrice - storeRent;
  
  if (profit >= ekskurzia) {
    holidaySummary = Math.abs(profit - ekskurzia).toFixed(2);
    console.log(`Yes! ${holidaySummary} lv left.`);
  } else {
    holidaySummary = Math.abs(profit - ekskurzia).toFixed(2);
    console.log(`Not enough money! ${holidaySummary} lv needed.`);
  }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

