function bombNumbers(arr1, arr2) {
  let bombNumber = arr2[0];
  let bombPower = arr2[1];

  let sum = 0;

  while (arr1.includes(bombNumber)) {
    let index = arr1.indexOf(bombNumber)
    let elementsToRemove = (bombPower * 2) + 1;
    let startingIndex = index - bombPower;

    if (startingIndex < 0) {
      elementsToRemove += startingIndex;
      startingIndex = 0;
    }
    arr1.splice(startingIndex, elementsToRemove)

  }


  for (let num of arr1) {
    sum += num;
  }
  console.log(sum);
}