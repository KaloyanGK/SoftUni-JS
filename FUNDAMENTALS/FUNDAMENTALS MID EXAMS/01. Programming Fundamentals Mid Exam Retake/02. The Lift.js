function lift(arr) {
  let people = Number(arr.shift());
  let newArr = arr.toString().split(" ").map(Number);
  for (let i = 0; i < newArr.length; i++) {
    let wagonNumber = i;
    let peopleInWagon = 4 - newArr[i];
    people -= peopleInWagon;

    if ((peopleInWagon = 4)) {
      newArr.splice(wagonNumber, 1, peopleInWagon);
      if (wagonNumber == newArr.length - 1) {
        if (people > 0) {
          console.log(`There isn't enough space! ${people} people in a queue!`);
          console.log(newArr.join(` `));
          break;
        } else {
          console.log(newArr.join(` `));
          break;
        }
      }
    }
    if (people < 4) {
      wagonNumber++;
      newArr.splice(wagonNumber, 1, people);
      console.log(`The lift has empty spots!`);
      console.log(newArr.join(` `));
      return;
    }
  }
}
lift(["10", "0 0 0"]);
