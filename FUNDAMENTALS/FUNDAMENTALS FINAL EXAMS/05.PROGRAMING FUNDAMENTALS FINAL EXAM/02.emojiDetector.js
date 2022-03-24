function emoji(input) {
    let pattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/;
    let allDigit = /\d/g;

    let sumDigits = 1;

    let digits = input[0].match(allDigit);
    digits.forEach(element => {
        sumDigits *= Number(element);
    });
    
    let emoji = input[0].split(' ');
    let counter = 0;
    let printName = [];
    console.log(input[0]);
    // for (let line of emoji) {
    //     let name = pattern.exec(line);
    //     let sumChar = 0;
    //     if (name) {
    //         counter++;
    //         let word = name.groups['emoji'];
    //         for (let char of word) {
    //             char = char.charCodeAt();
    //             sumChar += char;
    //         } if (sumChar >= sumDigits) {
    //             printName.push(name[0]);
    //         }
    //     }
    // } console.log(`Cool threshold: ${sumDigits}`);
    // console.log(`${counter} emojis found in the text. The cool ones are:`);
    // if (printName.length > 0) {
    //     console.log(printName.join('\n'));
    // }
}


emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])