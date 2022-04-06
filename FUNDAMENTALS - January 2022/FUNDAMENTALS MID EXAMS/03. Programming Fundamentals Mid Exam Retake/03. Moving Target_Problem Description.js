function moving(arr) {
  let array = arr;
  let targets = array.shift().split(` `).map(Number);
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let currentEl = array[i];
    let splited = currentEl.split(` `);
    let command = splited.shift();
    if (command == `Shoot`) {
      let indexToManipulate = Number(splited.shift());
      let powerOfManipulation = Number(splited.shift());
      if (indexToManipulate <= targets.length) {
        targets[indexToManipulate] -= powerOfManipulation;
      }
      if (targets[indexToManipulate] <= 0) {
        targets.splice(indexToManipulate, 1);
      }
    } else if (command == `Add`) {
      let indexToManipulate = Number(splited.shift());
      let valueOfNumber = Number(splited.shift());
      if (indexToManipulate <= targets.length) {
        targets.splice(indexToManipulate, 0, valueOfNumber);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (command == `Strike`) {
      let indexToManipulate = Number(splited.shift());
      let radius = Number(splited.shift());
      let elementsToRemove = radius * 2 + 1;
      let startingIndex = indexToManipulate - radius;
      if (startingIndex < 0) {
        console.log(`Strike missed!`);
      } else {
        targets.splice(startingIndex, elementsToRemove);
      }
    } else if (command == `End`) {
      console.log(targets.join(`|`));
    }
  }
}

moving(["1 2 3 4 5", "Strike 0 1", "End"]);
