function bitcoin(input) {
    let workingDays = input.length
    let priceForBitcoin = 11949.16;
    let priceForGold = 67.51;
    let totalGoldMined = 0

    for (let i = 0; i < workingDays; i++) {
        let goldMined = input[i];
        totalGoldMined = goldMined * priceForGold;


    }
   
} bitcoin([100, 200, 300])