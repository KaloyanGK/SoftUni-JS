function pcGameShop(input) {

    let soldGames = Number(input[0]);
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;

    for (let i = 1; i <= soldGames; i++) {
        let gameName = input[i];
        if (gameName === `Hearthstone`) {
            c1++;
        } else if (gameName === `Fornite`) {
            c2++;
        } else if (gameName === `Overwatch`) {
            c3++;
        } else {
            c4++;
        }

    }
    let c1Percent = (c1 / soldGames * 100).toFixed(2);
    let c2Percent = (c2 / soldGames * 100).toFixed(2);
    let c3Percent = (c3 / soldGames * 100).toFixed(2);
    let c4Percent = (c4 / soldGames * 100).toFixed(2);
    console.log(`Hearthstone - ${c1Percent}%`);
    console.log(`Fornite - ${c2Percent}%`);
    console.log(`Overwatch - ${c3Percent}%`);
    console.log(`Others - ${c4Percent}%`);
}

pcGameShop([`4`, `Hearthstone`, `Fornite`, `Overwatch`, `Counter - Strike`])