function solve(arr) {
  let array = arr;
  let invetory = array.shift().split(`, `);

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let splited = current.split(` - `);
    let command = splited.shift();
    if (command == `Collect`) {
      let item = splited.shift();
      if (!invetory.includes(item)) {
        invetory.push(item);
      }
    } else if (command == `Drop`) {
      let item = splited.shift();
      if (invetory.includes(item)) {
        let currentIndex = invetory.indexOf(item);
        invetory.splice(currentIndex, 1);
      }
    } else if (command == `Combine Items`) {
      let item = splited.shift().split(`:`);

      let oldItem = item[0];
      let newItem = item[1];

      if (invetory.includes(oldItem)) {
        let index = invetory.indexOf(oldItem);
        invetory.splice(index + 1, 0, newItem);
      }
    } else if (command == `Renew`) {
      let item = splited.shift();
      if (invetory.includes(item)) {
        let index = invetory.indexOf(item);
        invetory.splice(index, 1);
        invetory.push(item);
      }
    } else if (command == `Craft!`) {
      console.log(invetory.join(`, `));
      return;
    }
  }
}

solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
