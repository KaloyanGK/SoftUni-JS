function suitcasesLoad(input) {
    let index = 0;
    let trunk = Number(input[index]);
    index++;
    let bagg = input[index];
    index++;
    let caseCaunter = 0;
    let flag = true;
    while (bagg !== "End") {
        let correctBagg = Number(bagg);
        caseCaunter++;
        if (caseCaunter != 0 && caseCaunter % 3 === 0) {
            correctBagg *= 1.10;
        }
        if (trunk < correctBagg) {
            caseCaunter--;
            flag = false;
            console.log(`No more space!`);
            console.log(`Statistic: ${caseCaunter} suitcases loaded.`);
            break;
        }

        trunk -= correctBagg;



        bagg = input[index];
        index++;
    }
    if (flag) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${caseCaunter} suitcases loaded.`);
    }
} suitcasesLoad([`550`, `100`, `252`, `72`, `End`])