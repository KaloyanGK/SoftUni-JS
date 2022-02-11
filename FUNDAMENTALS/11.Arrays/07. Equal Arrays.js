function equalArrays(arr1, arr2) {
  let isTheSame = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isTheSame = false;
      break;
    }
  }
  let sum = 0;

  if (isTheSame) {
    for (let number of arr1) {
      sum += Number(number);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
