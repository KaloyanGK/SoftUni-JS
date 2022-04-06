function solve(input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})(\1)/g;

    let text = input[0];
    let match = pattern.exec(text);
    let counter = 0;
    let array = [];

    while (match !== null) {
        counter++;
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split(``).reverse().join(``);
        if (word1 == reversed) {
            array.push(`${word1} <=> ${word2}`);
        }

        match = pattern.exec(text);
    }
    if (counter == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (array.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(array.join(`, `));
    }
}
solve([`#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`]);
