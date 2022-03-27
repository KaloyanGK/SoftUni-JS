function solve(input) {
  let key = input.shift();
  input.pop();
  for (el of input) {
    el = el.split(`>>>`);
    let command = el[0];
    if (command === `Slice`) {
      let firstIndex = el[1];
      let secondIndex = el[2];
      let beforeKey = key.slice(0, firstIndex);
      let afterKey = key.slice(secondIndex);
      key = beforeKey + afterKey;
      console.log(key);
    } else if (command === `Flip`) {
      let firstIndex = el[2];
      let secondIndex = el[3];
      let beforeKey = key.slice(0, firstIndex);
      let afterKey = key.slice(secondIndex);
      if (el[1] === `Upper`) {
        let flipped = key.slice(firstIndex, secondIndex).toUpperCase();
        key = beforeKey + flipped + afterKey;
      } else if (el[1] === `Lower`) {
        let flipped = key.slice(firstIndex, secondIndex).toLowerCase();
        key = beforeKey + flipped + afterKey;
      }
      console.log(key);
    } else if (command === `Contains`) {
      let element = el[1];
      if (key.includes(element)) {
        console.log(`${key} contains ${element}`);
      } else {
        console.log(`Substring not found!`);
      }
    }
  }
  console.log(`Your activation key is: ${key}`);
}
solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
