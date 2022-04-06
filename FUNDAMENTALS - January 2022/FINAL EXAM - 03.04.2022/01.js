function solve(input) {
  let text = input.shift();

  for (let el of input) {
    el = el.split(` `);
    let command = el[0];
    if (command == `Change`) {
      let char = el[1];
      let replacement = el[2];
      while (text.includes(char)) {
        text = text.replace(char, replacement);
      }
      console.log(text);
    } else if (command == `Includes`) {
      let subs = el[1];
      if (text.includes(subs)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (command == `End`) {
      let subs = el[1];
      if (text.endsWith(subs)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (command == `Uppercase`) {
      text = text.toUpperCase();
      console.log(text);
    } else if (command == `FindIndex`) {
      let char = el[1];
      let index = text.indexOf(char);
      console.log(index);
    } else if (command == `Cut`) {
      let startIndex = Number(el[1]);
      let count = Number(el[2]);

      let subs = text.substring(startIndex, startIndex + count);

      console.log(subs);
    }
  }
}
solve([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
