function demo(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    let totalSum = 0;
    let totalCashSum = 0;
    let totalCardSum = 0;
    let cs = 0;
    let cc = 0;
    let averageCS = 0;
    let averageCC = 0;
    while (command !== `End`) {
        let currentCashSum = Number(command);
        cs++;
        totalCashSum += currentCashSum;

        index++;
        command = input[index]

        let currentCardSum = Number(command);
        cc++;
        totalCardSum += currentCardSum;

        index++;
        command = input[index]

        totalSum = totalCashSum + totalCardSum;

        if (currentCashSum > 100) {
            cs--;
            totalCashSum -= currentCashSum;
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
        }
        if (currentCardSum <= 10) {
            cc--;
            totalCardSum -= currentCardSum;
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
        }
        averageCS = totalCashSum / cs;
        averageCC = totalCardSum / cc;
        if (totalSum >= target) {
            console.log(`Average CS: ${averageCS.toFixed(2)}`);
            console.log(`Average CC: ${averageCC.toFixed(2)}`);
            return;
        }
    }
    if (command === `End`) {
        console.log(`Failed to collect required money for charity.`);
    }

} demo

    ([`500`, `120`, `8`, `63`, `256`, `78`, `317`]);


    // ([`600`, `86`, `150`, `98`, `227`, `End`])



