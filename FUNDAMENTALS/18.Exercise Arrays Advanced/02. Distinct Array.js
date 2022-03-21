function distinctArray(array) {
  // for (let i = 0; i < array.length; i++) {
  //     let first = array[i];
  //     for (let k = i + 1; k < array.length; k++) {
  //         let next = array[k];
  //         if (first === next) {
  //             array.splice(k, 1)
  //             k = k - 1;
  //         }
  //     }
  // }
  // console.log(array.join(` `));

  let newArray = [];
  for (let number of array) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  console.log(newArray.join(` `));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
