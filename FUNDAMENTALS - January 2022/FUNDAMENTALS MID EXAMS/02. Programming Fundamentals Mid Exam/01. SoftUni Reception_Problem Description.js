function solve(input) {
  let empl1 = Number(input[0]);
  let empl2 = Number(input[1]);
  let empl3 = Number(input[2]);

  let total = empl1 + empl2 + empl3;

  let students = Number(input[3]);
  let counter = 0;
  while (students > 0) {
    counter++;
    if (counter % 4 !== 0) {
      students -= total;
    }
  }
  console.log(`Time needed: ${counter}h.`);
}
solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);
solve(["3", "2", "5", "40"]);
