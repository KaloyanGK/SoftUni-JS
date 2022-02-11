function passValidator(string) {
  function isLengthEnougth(stringPassword) {
    return stringPassword.length >= 6 && stringPassword.length <= 10;
  }
  function isOnlyLetterAndDigit(stringPassword) {
    for (let currCharIndex of stringPassword) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122) &&
        !(currChar >= 48 && currChar <= 57)
      ) {
        return false;
      }
    }
    return true;
  }
  function isHavingAtLesTwoDiggits(stringPassword) {
    let count = 0;
    for (let charIndex of stringPassword) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  let isLengthValid = isLengthEnougth(string);
  let isLettersAndDigitsOnly = isOnlyLetterAndDigit(string);
  let isAtLeastTwoDigits = isHavingAtLesTwoDiggits(string);
  if (isLengthValid && isLettersAndDigitsOnly && isAtLeastTwoDigits) {
    console.log(`Password is valid`);
  }
  if (!isLengthValid) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (!isLettersAndDigitsOnly) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (!isAtLeastTwoDigits) {
    console.log(`Password must have at least 2 digits`);
  }
}
passValidator("Pa$s$s");
