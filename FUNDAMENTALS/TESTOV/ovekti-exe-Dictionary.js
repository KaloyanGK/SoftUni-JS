function solve(input) {
  let text = input.shift();

  let newText = ``;
  for (let el of input) {
    el = el.split(` `);
    if (el[0] == `TakeOdd`) {
      for (let i = 0; i < text.length; i++) {
        if (i % 2 != 0) {
          newText += text[i];
        }
      }
      text = newText;
      console.log(text);
    } else if (el[0] == `Cut`) {
      let index = +el[1];
      let length = +el[2];
      let reset = text.substring(index, index + length);
      text = text.replace(reset, ``)
      console.log(text);
    } else if (el[0] == `Substitute`) {
      let oldEl = el[1];
      let newEl = el[2];
      if (text.includes(oldEl)) {
        while (text.includes(oldEl)) {
          text = text.replace(oldEl, newEl);
        }
        console.log(text);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }

  console.log(`Your password is: ${text}`);
}

solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
