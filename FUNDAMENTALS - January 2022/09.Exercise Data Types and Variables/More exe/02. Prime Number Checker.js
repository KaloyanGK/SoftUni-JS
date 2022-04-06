function primeChecker(num) {
  let number = Number(num);
  let isNumPrime = true;
  if (number == 1) {
    console.log("true");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isNumPrime = false;
        console.log(`false`);
        return;
      }
    }
  }
  if (isNumPrime) {
    console.log("true");
  }
}

primeChecker(7);
primeChecker(8);
primeChecker(121);
