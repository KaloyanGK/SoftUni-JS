function shopping(input) {
  let budget = Number(input[0]);
  let vcPcs = Number(input[1]);
  let cpuPcs = Number(input[2]);
  let ramPcs = Number(input[3]);

  let vcPrice = vcPcs * 250;
  let cpuPrice = vcPrice * 0.35;
  let totalCpuPrice = cpuPrice * cpuPcs;
  let ramPrice = vcPrice * 0.1;
  let totalRamPrice = ramPrice * ramPcs;

  let totalPrice = vcPrice + totalCpuPrice + totalRamPrice;

  if (vcPcs > cpuPcs) {
    totalPrice = totalPrice * 0.85;
  }

  let diff = Math.abs(budget - totalPrice).toFixed(2);
  if (budget >= totalPrice) {
    console.log(`You have ${diff} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);
