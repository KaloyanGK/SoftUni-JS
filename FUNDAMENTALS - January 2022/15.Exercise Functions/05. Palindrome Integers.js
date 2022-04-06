function backwardsNum(arrOfNumbers) {
  let numOfArr = arrOfNumbers;

  let length = numOfArr.length;
  let currentNum = "";
  let results = "";

  function backwards(array) {
    for (let i = 0; i < length; i++) {
      let num = Number(numOfArr[i]);

      currentNum = num.toString();

      let palindrome = "";

      for (let j = currentNum.length - 1; j >= 0; j--) {
        palindrome += currentNum[j];
      }

      palindrome = Number(palindrome);

      if (palindrome == num) {
        results += "true\n";
      } else {
        results += "false\n";
      }
    }
  }
  backwards(arrOfNumbers);

  console.log(`${results}`);
}
backwardsNum([123, 323, 421, 121]);
console.log(`------`);
backwardsNum([32, 2, 232, 1010]);
