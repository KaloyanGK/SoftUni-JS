function solve(text, word) {
   
    let token = text.split(word);
    console.log(token.join(`*`.repeat(word.length)));
}
solve("A small sentence with some words", "small");
