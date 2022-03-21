function treasureHunt(arr) {
  let chest = arr.shift().split(`|`);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let splited = current.split(` `);
    let command = splited.shift();
    if (command == `Loot`) {
      for (let el of splited) {
        if (!chest.includes(el)) {
          chest.unshift(el);
        }
      }
    } else if (command == `Drop`) {
      let currentIndex = Number(splited.shift());
      if (currentIndex >= 0 && currentIndex < chest.length) {
        let elementToTake = chest[currentIndex];
        chest.splice(currentIndex, 1);
        chest.push(elementToTake);
      }
    } else if (command == `Steal`) {
      let stealItems = Number(splited.shift());
      if (stealItems >= chest.length - 1) {
        let newChest = chest.slice(0);
        console.log(newChest.join(`, `));
        chest.splice(0);
      } else {
        let newChest = chest.slice(-stealItems);
        console.log(newChest.join(`, `));
        chest.splice(chest.length - stealItems);
      }
    } else if (command == `Yohoho!`) {
      break;
    }
  }
  if (chest.length <= 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let sum = 0;
    for (let el of chest) {
      sum += el.length;
    }
    console.log(`Average treasure gain: ${(sum / chest.length).toFixed(2)} pirate credits.`);
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
