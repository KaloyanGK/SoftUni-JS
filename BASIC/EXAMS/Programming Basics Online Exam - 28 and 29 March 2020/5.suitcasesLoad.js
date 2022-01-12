function suitcase(input) {
    let index = 0;
    let trunk = input[index];
    index++;
    let bagg = input[index];
    index++;
    let baggCounter = 0;
    let flag = true;
    while (bagg !== `End`) {
        let currentBag = Number(bagg);
        baggCounter++;
        if (baggCounter !== 0 && baggCounter % 3 === 0) {
            currentBag *= 1.10;
            console.log(baggCounter);
        }
        if (trunk < currentBag) {
            baggCounter--;
            flag = false;
            console.log(`No more space!`);
            console.log(`Statistic: ${baggCounter} suitcases loaded.`);
            break;
        }
        trunk -= currentBag;
        bagg = input[index];
        index++;
    }
    if (flag) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${baggCounter} suitcases loaded.`);
    }
} suitcase([`700.5`, `180`, `340.6`, `126`, `220`])