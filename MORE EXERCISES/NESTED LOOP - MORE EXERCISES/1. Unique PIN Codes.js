function demo(input) {
    let firsTEnd = Number(input[0])
    let secondEnd = Number(input[1])
    let thirdEnd = Number(input[2])

    for (let a = 1; a <= firsTEnd; a++) {

        for (let b = 1; b <= secondEnd; b++) {

            for (let c = 1; c <= thirdEnd; c++) {

                if (a % 2 === 0 && c % 2 === 0) {
                    if (b == 2 || b == 3 || b == 5 || b == 7) {
                        console.log(`${a} ${b} ${c}`);
                    }
                }
            }
        }

    }


} demo([`8`, `2`, `8`])


// if (edno % 2 === 0 && tri % 2 === 0 && dve % b === 0)