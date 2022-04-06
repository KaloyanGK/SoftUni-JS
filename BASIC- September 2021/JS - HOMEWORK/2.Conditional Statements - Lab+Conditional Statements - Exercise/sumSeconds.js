function sumSeconds(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  let sumInSec = a + b + c;
  let timeInMin = Math.floor(sumInSec / 60);
  let timeInSec = sumInSec % 60;

  if (timeInSec < 10) {
    console.log(`${timeInMin}:0${timeInSec}`);
  } else {
    console.log(`${timeInMin}:${timeInSec}`);
  }
}
sumSeconds(["50", "50", "49"]);
