function solve(params) {
    let words = {};

    for (let word of params) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }
    }
    let sorted = Object.entries(words);

    sorted.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
solve([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
]);
