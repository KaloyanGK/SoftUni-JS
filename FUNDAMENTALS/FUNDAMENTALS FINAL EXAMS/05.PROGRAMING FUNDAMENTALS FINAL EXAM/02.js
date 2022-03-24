function solve(input) {
    let pattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/;
    let digitPattern = /\d/g;
    let treshold = 1;

    let numbers = input[0].match(digitPattern);
    numbers.forEach(el => {
        treshold *= Number(el)
    });

    let emoji = input[0].split(` `)
    let counter = 0;
    let emojiesName = [];
    for (let el of emoji) {
        let sumChar = 0;
        let name = pattern.exec(el);
        if (name !== null) {
            counter++
            let word = name.groups[`emoji`]
            for (let char of word) {
                char = char.charCodeAt()
                sumChar += char;
            } if (sumChar >= treshold) {
                emojiesName.push(name[0])
            }
        }
    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    if (emojiesName.length > 0) {
        console.log(`${emojiesName.join(`\n`)}`);
    }
}
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])