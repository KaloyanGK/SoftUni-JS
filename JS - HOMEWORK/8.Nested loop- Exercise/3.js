function demo(input) {
    let index = 0;
    let command = input[index];
    index++;

    let prosti = 0;
    let slojni = 0;


    while (command !== `stop`) {
        let chislo = Number(command);

        if (chislo < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (chislo === 1) {
            prosti += chislo;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let i = 2; i < Math.sqrt(chislo); i++) {
            if (chislo % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prosti += chislo;
        } else {
            slojni += chislo;
        }

        command = input[index];
        index++;

    }
    console.log(`${prosti}`);
    console.log(`${slojni}`);

}
demo(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
