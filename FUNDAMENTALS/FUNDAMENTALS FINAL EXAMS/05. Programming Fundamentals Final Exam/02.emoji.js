function emoji(input) {
    let pattern = /([:]{2}|[*]{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let allDigit = /\d/g;
    let treshold = 1;

    let text = input[0];
    let numbers = text.match(allDigit).map(Number);
    for (let el of numbers) {
        treshold *= el;
    }
    console.log(`Cool threshold: ${treshold}`);
    let emojis = []
    let validMatch
    while (validMatch = pattern.exec(text)) {
        emojis.push(validMatch)
    }
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for (let el of emojis) {
        let emojiText = el[2];
        let fullEmoji = el[0];
        let coolness = 0;
        for (let char of emojiText) {
            coolness += char.charCodeAt()
        }
        if (coolness > treshold) {
            console.log(fullEmoji);
        }
    }
}
emoji([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
