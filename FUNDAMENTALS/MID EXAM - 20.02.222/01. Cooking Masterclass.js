function solve(input) {
  let budget = Number(input[0]);
  let students = Number(input[1]);
  let priceOfFlour = Number(input[2]);
  let priceOfEgg = Number(input[3]);
  let priceOfApron = Number(input[4]);

  let extraApron = Math.ceil(students + students * 0.2);

  let totalApron = priceOfApron * extraApron;
  let totalEggsPrice = priceOfEgg * 10 * students;
  let studentsToBuyFlour = 0;

  for (let i = 1; i <= students; i++) {
    let currentStudent = Number(i);
    if (currentStudent % 5 != 0) {
      studentsToBuyFlour += 1;
    }
  }
  let totalFloorPrice = studentsToBuyFlour * priceOfFlour;
  let totalPrice = totalApron + totalEggsPrice + totalFloorPrice;
  let diff = totalPrice - budget;
  if (totalPrice <= budget) {
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
  } else {
    console.log(`${diff.toFixed(2)}$ more needed.`);
  }
}
solve([946, 20, 12.05, 0.42, 27.89]);
