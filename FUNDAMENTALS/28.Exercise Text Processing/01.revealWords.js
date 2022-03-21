function solve(words, string) {
  let wordsArr = words.split(`, `);

  for (let i = 0; i < wordsArr.length; i++) {
    let currentWord = wordsArr[i];

    let template = "*".repeat(currentWord.length);
    let stringArr = string.split(` `);

    for (let el2 of stringArr) {
      if (template === el2) {
        string = string.replace(el2, currentWord);
      }
    }
  }
  console.log(string);
}
solve("great", "softuni is ***** place for learning new programming languages");
