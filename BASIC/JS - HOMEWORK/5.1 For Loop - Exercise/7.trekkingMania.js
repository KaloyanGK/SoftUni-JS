function trekkingMania(input) {

    let n = Number(input[0])

    let mysala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;
    let all = 0;

    for (let i = 1; i <= n; i++) {
        let x = Number(input[i]);
        if (x <= 5) {
            mysala += x;
        } else if (x >= 6 && x <= 12) {
            monblan += x;
        } else if (x > 12 && x <= 25) {
            kilim += x;
        } else if (x > 25 && x <= 40) {
            k2 += x;
        } else {
            everest += x;
        }
        all = mysala + monblan + kilim + k2 + everest;
    }
    let mysalaPerc = mysala / all * 100
    let monblanPerc = monblan / all * 100
    let kilimPerc = kilim / all * 100
    let k2Perc = k2 / all * 100
    let everestPerc = everest / all * 100

    console.log(mysalaPerc.toFixed(2) + `%`)
    console.log(monblanPerc.toFixed(2) + `%`)
    console.log(kilimPerc.toFixed(2) + `%`)
    console.log(k2Perc.toFixed(2) + `%`)
    console.log(everestPerc.toFixed(2) + `%`)



} trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])


