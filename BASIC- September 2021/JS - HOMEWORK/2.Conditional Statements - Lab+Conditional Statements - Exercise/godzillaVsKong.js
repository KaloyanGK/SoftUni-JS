function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let statisti = Number(input[1]);
  let drehi = Number(input[2]);

  let dekor = budget * 0.1;
  let drehiCena = 0;
  if (statisti > 150) {
    drehiCena = statisti * (drehi * 0.9);
  } else {
    drehiCena = statisti * drehi;
  }
  let totalPrice = dekor + drehiCena;

  let diff = Math.abs(totalPrice - budget);
  if (totalPrice > budget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
