function lunchBreak(input) {
  let ime = input[0];
  let vreme = Number(input[1]);
  let pochivka = Number(input[2]);
 
  let obqd = pochivka * 1 / 8;
  let otdih = pochivka * 1 / 4;
  let svobodnoVreme = pochivka - (obqd + otdih);
  let diff = Math.ceil(vreme - svobodnoVreme);
  if (svobodnoVreme >= vreme) {
    console.log(
      `You have enough time to watch ${ime} and left with ${diff} minutes free time.`
    );
  } else if (svobodnoVreme <= vreme){
    console.log(
      `You don't have enough time to watch ${ime}, you need ${diff} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);