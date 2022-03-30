function solve(input) {
    let text = input.shift();

    for (let el of input) {
        el = el.split(`:|:`);
        let command = el[0];
        if (command === `InsertSpace`) {
            let index = Number(el[1]);
            let first = text.substring(0, index);
            let second = text.substring(index);
            text = first + ` ` + second;
            console.log(text);
        }
        else if (command === `Reverse`) {
            let subs = el[1];
            let index = text.indexOf(subs);
            if (index != -1) {
                let first = text.slice(0, index);
                let second = text.slice(index + subs.length)
                let result = first + second + subs.split(``).reverse().join(``)
                text = result

                console.log(text);

            }
            else {
                console.log(`error`);

            }
        }
        else if (command === `ChangeAll`) {
            let char = el[1];
            let newChar = el[2];
            while (text.includes(char)) {
                text = text.replace(char, newChar);
            }
            console.log(text);

        } else if (command === `Reveal`) {
            console.log(`You have a new text message: ${text}`);
        }
    }
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);
