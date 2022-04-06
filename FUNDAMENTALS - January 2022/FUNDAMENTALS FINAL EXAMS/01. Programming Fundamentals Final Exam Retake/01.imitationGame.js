function solve(input) {
    let text = input.shift();
    let line = input.shift();
    while (line !== `Decode`) {
        line = line.split(`|`);
        let command = line[0];
        if (command == `ChangeAll`) {
            let oldText = line[1];
            let newText = line[2];
            while (text.includes(oldText)) {
                text = text.replace(oldText, newText)
            }

        } else if (command == `Insert`) {
            let index = Number(line[1]);
            let value = line[2];
            let first = text.substring(0, index);
            let second = text.substring(index)
            text = first + value + second
        } else if (command == `Move`) {
            let numberOfLetters = Number(line[1]);
            let first = text.substring(0, numberOfLetters);
            let second = text.substring(numberOfLetters);
            text = second + first;
        }


        line = input.shift();
    }
    console.log(`The decrypted message is: ${text}`);
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',

])