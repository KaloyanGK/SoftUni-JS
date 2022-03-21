function arrModifier(arr) {
  let array = arr;
  let nums = array.shift().split(` `).map(Number);
  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(` `);
    let command = tokens[0];
    
    if (command == `swap`) {
      let firstIndex = Number(tokens[1]);
      let secondIndex = Number(tokens[2]);
      let newElement = nums[firstIndex];
      nums[firstIndex] = nums[secondIndex];
      nums[secondIndex] = newElement;
    } else if (command == `multiply`) {
      let firstIndex = Number(tokens[1]);
      let secondIndex = Number(tokens[2]);
      let newNum = nums[firstIndex] * nums[secondIndex];
      nums.splice(firstIndex, 1, newNum);
    } else if (command == `decrease`) {
      for (let i = 0; i < nums.length; i++) {
        nums[i]--;
      }
    } else if (command == `end`) {
      break;
    }
  }

  console.log(nums.join(`, `));
}
arrModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
