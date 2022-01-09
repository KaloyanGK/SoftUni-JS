function demo(input) {

    index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let counterCashSuccessful = 0;
    let counterCashUnseccessful = 0;

    let counterWithCardSuccessful = 0;
    let counterWithCardUnsuccessful = 0;

    let counterOfTwo = 0;

    let finalCash = 0;
    let finalCard = 0;
    let finalSum = 0;

    let command = input[index];

    while (command !== "End") {
        let currentNum = Number(command);
        if (counterOfTwo % 2 === 0) {
            if (currentNum <= 100) {
                finalCash += currentNum;
                counterCashSuccessful++;
                console.log(`Product sold!`);
            } else {
                counterCashUnseccessful++;
                console.log(`Error in transaction!`);
            }
        } else if (counterOfTwo % 2 !== 0) {
            if (currentNum < 10) {
                counterWithCardUnsuccessful++;
                console.log(`Error in transaction!`);
            } else {
                finalCard += currentNum;
                counterWithCardSuccessful++;
                console.log(`Product sold!`);
            }
        }
        finalSum = finalCash + finalCard;
        if (finalSum >= moneyNeeded) {
            finalCash = finalCash / counterCashSuccessful;
            finalCard = finalCard / counterWithCardSuccessful;
            console.log(`Average CS: ${finalCash.toFixed(2)}`);
            console.log(`Average CC: ${finalCard.toFixed(2)}`);
            return;
        }
        counterOfTwo = counterCashSuccessful + counterCashUnseccessful + counterWithCardSuccessful + counterWithCardUnsuccessful;
        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }


} demo([`500`, `120`, `8`, `63`, `256`, `78`, `317`]);