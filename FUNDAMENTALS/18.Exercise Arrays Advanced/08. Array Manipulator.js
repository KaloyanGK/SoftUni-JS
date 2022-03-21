function solve(arr1, arr2) {
  let arrayForManipulation = arr1;
  let arrayAsNumber = arrayForManipulation.map(Number);

  for (let i = 0; i < arr2.length; i++) {
    let arrayWithCommands = arr2[i].split(` `);

    let currentCommand = arrayWithCommands.shift();
    console.log(currentCommand);
    // if (currentCommand == `add`) {
    //   let currIndex = +arrayWithCommands.shift();
    //   let currEl = +arrayWithCommands.shift();
    //   arrayAsNumber.splice(currIndex, 0, currEl);
    // } else if (currentCommand == `addMany`) {

    //   let indexToStart = +arrayWithCommands[0];

    //   for (let i = 1; i < arrayWithCommands.length; i++) {
    //     let currentNum = Number(arrayWithCommands[i]);
    //     arrayAsNumber.splice(indexToStart + i, 0, currentNum);
    //   }
    // } else if (currentCommand == `contains`) {
    //   let currElForOutput = +arrayWithCommands.shift();

    //   let indexOfSpecificNum = arrayAsNumber.indexOf(currElForOutput);
    //   console.log(indexOfSpecificNum);
    // } else if (currentCommand == `remove`) {
    //   let indexToRemove = +arrayWithCommands.shift();
    //   arrayAsNumber.splice(indexToRemove, 1);
    // } else if (currentCommand == `shift`) {
    //   let countsOfRotation = +arrayWithCommands.shift();
    //   for (let i = 0; i < countsOfRotation; i++) {
    //     let elementToPush = arrayAsNumber.shift();
    //     arrayAsNumber.push(elementToPush);
    //   }
    // } else if (currentCommand == `sumPairs`) {
    //   for (let i = 0; i < arrayAsNumber.length; i++) {
    //     let first = Number(arrayAsNumber.splice(i, 1));
    //     let second = Number(arrayAsNumber.splice(i, 1));
    //     let result = first + second;
    //     arrayAsNumber.splice(i, 0, result);
    //   }
    // } else if (currentCommand == `print`) {
    //   console.log(` [ ${arrayAsNumber.join(', ')} ]`);
    // }
  }
} solve([1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])

