function colorize() {
  let itemsArr = Array.from(document.getElementsByTagName(`tr`));

  itemsArr.forEach((x, i) => {
    if (i % 2 !== 0) {
      x.style.backgroundColor = `Teal`;
    }
  });
}


// function colorize() {
//   let elements = Array.from(document.querySelectorAll(`table tr:nth-child(even)`)).forEach((el => el.style.backgroundColor = `Teal`));

// } Memory: 62.66 MB в Judge


// function colorize() {
//   let elements = document.querySelectorAll(`table tr:nth-child(even)`);
//   for (let el of elements) {
//       el.style.backgroundColor = `Teal`
//   }
// }
// 0.00MB в Judge