function change(input) {
    let bitcoin = Number(input[0]);
    let chinese = Number(input[1]);
    let commisionPercent = Number(input[2]);

    let leva = bitcoin * 1168;
    let usd = chinese * 0.15;

    let usdToLeva = usd * 1.76;

    let euroTotal = (leva + usdToLeva) / 1.95;

    let euroAftercommision = euroTotal - (euroTotal * commisionPercent / 100);



    console.log(euroAftercommision.toFixed(2));
} change([`7`, `50200.12`, `3`])