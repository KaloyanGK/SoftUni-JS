function barcodeGenerator(input) {

    let index = 0;
    let startNumber = Number(input[index++]);
    let endNumber = Number(input[index]);
    let buffer = '';
    let strStartNumber = '' + startNumber;
    let strEndNumber = '' + endNumber;

    for (a = strStartNumber[0]; a <= strEndNumber[0]; a++) {
        for (b = strStartNumber[1]; b <= strEndNumber[1]; b++) {
            for (c = strStartNumber[2]; c <= strEndNumber[2]; c++) {
                for (d = strStartNumber[3]; d <= strEndNumber[3]; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buffer += '' + a + b + c + d + " "

                    }
                }
            }
        }
    }
    console.log(buffer);
} barcodeGenerator(["3256",
    "6579"])