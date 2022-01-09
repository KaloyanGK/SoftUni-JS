function vtora(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = ``;

    for (let i = start; i <= end; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let numToString = i + ``;
        for (let index = 0; index < numToString.length; index++) {
            if (index % 2 === 0) {
                evenSum += Number(numToString[index]);
            } else {
                oddSum += Number(numToString[index]);
            }
        }
        if (evenSum === oddSum) {
            result += numToString + ` `;
        }

    }
    console.log(result);
} vtora(["100000",
    "100050"])
