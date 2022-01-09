function demo(input) {
    let budget = Number(input[0]);
    let noshtyvki = Number(input[1]);
    let noshtyvkaPrice = Number(input[2]);
    let percentExtraCosta = Number(input[3]);

    if (noshtyvki > 7) {
        noshtyvkaPrice = noshtyvkaPrice * 0.95;
    } else {
        noshtyvkaPrice = noshtyvkaPrice;
    }
    let totalPriceNoshtyvki = noshtyvkaPrice * noshtyvki;
    percentExtraCosta = percentExtraCosta / 100;
    let extraCosts = budget * percentExtraCosta;
    let totalCosts = totalPriceNoshtyvki + extraCosts;
    let diff = Math.abs(budget - totalCosts);

    if (budget >= totalCosts) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

} demo([`800.5`, `8`, `100`, `2`])