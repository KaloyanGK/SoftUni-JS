function trackingMania(input) {

    let musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let all = 0;
    let g = Number(input[0]);

    for (let i = 1; i <= g; i++) {

        let x = Number(input[i]);
        if (x <= 5) {
            musala += x;
        }
else if (x >= 6 && x <= 12) {
            Monblan += x;
        }
        else if (x > 12 && x <= 25) {
            Kilimandjaro += x;
        }
        else if (x > 25 && x <= 40) {
            K2 += x;
        } else {
            Everest += x;
        }
        all = musala + Monblan + Kilimandjaro + K2 + Everest;
    }

    let musalaPercent = (musala / all) * 100;
    let monblanPercent = (Monblan / all) * 100;
    let kilimandjaroPercent = (Kilimandjaro / all) * 100;
    let k2Percent = (K2 / all) * 100;
    let everestPercent = (Everest / all) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);




} trackingMania([`10`, `10`, `5`, `1`, `100`, `12`, `26`, `17`, `37`, `40`, `78`])