function demo(input) {
    let voda = 20;
    let net = 15;
    let months = Number(input[0]);
    let totalElec = 0;
    let othersExpenses = 0;
    let totalOtherExpenses = 0;
    for (let i = 1; i <= months; i++) {
        let elec = Number(input[i]);
        totalElec += elec;
        othersExpenses = (voda + net + elec) + ((voda + net + elec) * 0.2);
        totalOtherExpenses += othersExpenses

    }
    let totalVoda = voda * months;
    let totalNet = net * months;
    let avarage = (totalElec + totalVoda + totalNet + totalOtherExpenses) / months;
    console.log(`Electricity: ${totalElec.toFixed(2)} lv`);
    console.log(`Water: ${totalVoda.toFixed(2)} lv`);
    console.log(`Internet: ${totalNet.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherExpenses.toFixed(2)} lv`);
    console.log(`Average: ${avarage.toFixed(2)} lv`);

} demo
    // ([`5`, `68.63`, `89.25`, `132.53`, `93.53`, `63.22`])

    ([`8`, `123.54`, `231.54`, `140.23`, `100`, `122.4`, `430`, `178.52`, `64.2`])
