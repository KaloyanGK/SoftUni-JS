function colorize() {
  let items = document.getElementsByTagName(`tr`);
  let itemsArr = Array.from(items);

  itemsArr.forEach((x, i) => {
    if (i % 2 !== 0) {
      x.style.backgroundColor = `Teal`;
    }
  });
}
