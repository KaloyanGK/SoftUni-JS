function solve(input) {
  let password = input.shift();

  let newPass = ``;
  for (let el of input) {
    el = el.split(` `);
    let command = el[0];
    if (command == `TakeOdd`) {
      for (let i = 0; i < password.length; i++) {
        if (i % 2 !== 0) {
          newPass += password[i];
        }
      }
      password = newPass;

      console.log(password);
    } else if (command == `Cut`) {
      let startIndex = Number(el[1]);
      let length = Number(el[2]);
      let cutted = password.substring(startIndex, startIndex + length);
      password = password.replace(cutted, ``);
      console.log(password);
    } else if (command == `Substitute`) {
      let currElement = el[1];
      let newElement = el[2];
      if (!password.includes(currElement)) {
        console.log(`Nothing to replace!`);
      } else {
        while (password.includes(currElement)) {
          password = password.replace(currElement, newElement);
        }
        console.log(password);
      }
    } else if (command === `Done`) {
      console.log(`Your password is: ${password}`);
    }
  }
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
