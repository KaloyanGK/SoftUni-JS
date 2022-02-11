function oddAndEvenSum(num) {
  let numAsString = String(num);
  let stringLengt = numAsString.length;

  let takeOddSum = (nmberAstring) => {
    let oddSum = 0;
    for (let i = 0; i < stringLengt; i++) {
      let currentNumber = Number(nmberAstring[i]);
      if (currentNumber % 2 !== 0) {
        oddSum += currentNumber;
      }
    }
    return oddSum;
  }
  let takeEvenSum = (nmberAstring) => {
    let evenSum = 0;
    for (let i = 0; i < stringLengt; i++) {
      let currentNumber = Number(nmberAstring[i]);
      if (currentNumber % 2 === 0) {
        evenSum += currentNumber;
      }
    }
    return evenSum;
  }
  console.log(
    `Odd sum = ${takeOddSum(numAsString)}, Even sum = ${takeEvenSum(numAsString)}`);
}
oddAndEvenSum(1000435);
console.log(`---------------`);
oddAndEvenSum(3495892137259234);
