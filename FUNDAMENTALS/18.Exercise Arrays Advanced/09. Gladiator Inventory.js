function solve(arr) {
  let inventory = arr.shift().split(` `);

  for (let element of arr) {
    let currentElement = element.split(` `);
    let command = currentElement.shift();
    let item = currentElement.shift();
    if (command == `Buy`) {
      inventory.push(item);
    } else if (command == `Trash`) {
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
      }
    } else if (command == `Repair`) {
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
        inventory.push(item);
      }
    } else if (command == `Upgrade`) {
      let upg = item.split(`-`);
      let currentItem = upg.shift();
      let upgrade = upg.shift();
      if (inventory.includes(currentItem)) {
        let index = inventory.indexOf(currentItem);

        inventory.splice(index + 1, 0, `${currentItem}:${upgrade}`);
      }
    }
  }

  console.log(inventory.join(` `));
}
solve(["SWORD Shield Spear", "Trash Bow", "Repair Shield", "Upgrade Helmet-V"]);
