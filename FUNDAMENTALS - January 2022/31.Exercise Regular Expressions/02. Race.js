function solve(input) {
    
  let pattern = /[A-Za-z]/g;
  let newPattern = /[0-9]/g;
  let playersList = input.shift();

  let object = {};
  while (input[0] !== `end of race`) {
    let totalEl = 0;
    let char = input[0].match(pattern);
    let num = input[0].match(newPattern).map(Number);

    let name = char.join(``);
    if (playersList.includes(name)) {
      for (let el of num) {
        totalEl += el;
      }
      if (!object.hasOwnProperty(name)) {
        object[name] = totalEl;
      } else {
        object[name] += totalEl;
      }
    }

    input.shift();
  }
  let sorted = Object.entries(object);
  sorted = sorted.sort((a, b) => b[1] - a[1]);
  let counter = 0;

  for (let el of sorted) {
    counter++;
    if (counter == 1) {
      console.log(`1st place: ${el[0]}`);
    } else if (counter == 2) {
      console.log(`2nd place: ${el[0]}`);
    } else if (counter == 3) {
      console.log(`3rd place: ${el[0]}`);
    }
  }
}
solve([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
