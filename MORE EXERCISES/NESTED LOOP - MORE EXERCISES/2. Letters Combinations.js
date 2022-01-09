function demo(input) {
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let nope = input[2].charCodeAt(0);
    let result = '';
    let count = 0;

    for (let i = start; i <= end; i++) {
        let num1 = Number(i);
        for (let j = start; j <= end; j++) {
            let num2 = Number(j);
            for (let k = start; k <= end; k++) {
                let num3 = Number(k);
                if (num1 != nope && num2 != nope && num3 != nope) {
                    let firstLetter = String.fromCharCode(num1);
                    let secondLetter = String.fromCharCode(num2);
                    let thirdLetter = String.fromCharCode(num3);
                    result += `${firstLetter}${secondLetter}${thirdLetter} `
                    count++;
                }
            }
        }
    }

    console.log(`${result}${count}`);
} demo([`a`, `c`, `b`])