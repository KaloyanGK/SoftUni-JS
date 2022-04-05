function demo(input) {
  let counts = Number(input.shift());

  let firstPattern = /^\$[A-z][a-z]{2,}\$:\s{1}(\[\d+\]\|){3}$/g;

  let secPattern = /^\%[A-z][a-z]{2,}\%:\s{1}(\[\d+\]\|){3}$/g;

  let patternForNumbers = /\d+/g;

  let patternForLetters = /[A-Za-z]+/g;

  for (let i = 0; i < counts; i++) {
    let request = "";
    let message = "";

    if ((result = input[i].match(firstPattern)) !== null) {
      if ((result = input[i].match(patternForLetters)) !== null) {
        request = result.shift();

        if ((result = input[i].match(patternForNumbers)) !== null) {
          for (let num of result) {
            message += String.fromCharCode(Number(num));
          }
        }
      }
      console.log(`${request}: ${message}`);
    } else if ((result = input[i].match(secPattern)) !== null) {
      if ((result = input[i].match(patternForLetters)) !== null) {
        request = result.shift();

        if ((result = input[i].match(patternForNumbers)) !== null) {
          for (let num of result) {
            message += String.fromCharCode(Number(num));
          }
        }
        console.log(`${request}: ${message}`);
      }
    } else {
      console.log("Valid message not found!");
    }
  }
}

demo([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
