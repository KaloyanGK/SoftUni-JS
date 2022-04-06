function demo(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let num = ``;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {
                    if (a % 2 === 0 && d % 2 !== 0 && a > d && ((b + c) % 2 === 0)) {
                        num += `${a}${b}${c}${d} `
                    } else if (a % 2 !== 0 && d % 2 === 0 && a > d && ((b + c) % 2 === 0)) {
                        num += `${a}${b}${c}${d} `
                    }
                }
            }

        }

    }
    console.log(num);
} demo([`3`, `5`])