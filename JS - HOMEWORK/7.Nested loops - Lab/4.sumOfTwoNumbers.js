function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            if (i + j === magicNum) {

                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                return;

            }

        }

    }
    console.log(`${counter} combinations - neither equals ${magicNum}`);

} sumOfTwoNumbers(["88",
    "888",
    "2000"])
    
