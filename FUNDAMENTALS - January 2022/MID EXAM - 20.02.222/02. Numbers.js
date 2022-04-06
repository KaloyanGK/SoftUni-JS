function solve(arr) {
  let numbers = arr.shift().split(` `).map(Number);

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let splited = current.split(` `);
    let command = splited.shift();
    if (command == `Add`) {
      let currNum = Number(splited.shift());
      numbers.push(currNum);
    } else if (command == `Remove`) {
      let currNum = Number(splited.shift());
      if (numbers.includes(currNum)) {
        let index = numbers.indexOf(currNum);
        numbers.splice(index, 1);
      }
    } else if (command == `Replace`) {
      let currNum = Number(splited.shift());
      let newNum = Number(splited.shift());
      if (numbers.includes(currNum)) {
        let index = numbers.indexOf(currNum);
        numbers.splice(index, 1, newNum);
      }
    } else if (command == `Collapse`) {
      let currNum = Number(splited.shift());
      numbers = numbers.filter((el) => {
        if (el >= currNum) {
          return el;
        }
      });
    } else if (command == `Finish`) {
      console.log(numbers.join(` `));
    }
  }
}
solve([`1 20 -1 10`, `Collapse 8`, `Finish`]);
