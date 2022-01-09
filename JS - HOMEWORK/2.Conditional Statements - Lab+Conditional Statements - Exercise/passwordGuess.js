function passwordGuess(input) {
  let a = input[0];
  let b = `s3cr3t!P@ssw0rd`;

  if (a == b) {
    console.log(`Welcome`);
  } else {
    console.log(`Wrong password!`);
  }
}
passwordGuess(["qwerty"]);
