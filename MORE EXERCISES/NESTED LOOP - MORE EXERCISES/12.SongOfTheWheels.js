function demo(input) {
    let num = Number(input[0]);
    let pro = ``;
    let counter = 0;
    let magicNum = ``;
    let magicNumber = 0;
    let counterForFinalPass = 0;
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    magicNumber = a * b + c * d
                    if (a < b && c > d && magicNumber === num) {
                        counter++;
                        pro += `${a}${b}${c}${d} `

                        if (counter === 4) {
                            counterForFinalPass++;
                            magicNum += `${a}${b}${c}${d}`

                        }
                    }
                }
            }
        }
    }
    if (counter > 0) {
        console.log(pro);
    } else {
        console.log(`No!`);
    }

    if (counterForFinalPass > 0) {
        console.log(`Password: ${magicNum}`);
    } else {
        console.log(`No!`);
    }


} demo([`55`])