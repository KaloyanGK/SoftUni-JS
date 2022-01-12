function demo(input) {
    let goalNumber = Number(input[0])
    let combination = 0;


    for (let i = 0; i <= goalNumber; i++) {
        for (let j = 0; j <= goalNumber; j++) {
            for (let k = 0; k <= goalNumber; k++) {
                if (i + j + k === goalNumber) {
                    combination++;
                }
            }
        }
    }
    console.log(combination);
} demo([`25`])

