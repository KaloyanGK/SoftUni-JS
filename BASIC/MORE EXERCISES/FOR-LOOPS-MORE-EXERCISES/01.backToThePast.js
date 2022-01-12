function demo(input) {
    let totalMoney = Number(input[0]);
    let year = Number(input[1]);
    let firstYear = 1800;
    let age = 18;

    for (let currentYear = firstYear; currentYear <= year; currentYear++) {

        if (currentYear % 2 === 0) {
            totalMoney -= 12000;
        } else if (currentYear % 2 !== 0) {
            totalMoney -= 12000 + (50 * age)
        }
        age++;
    }
    if (totalMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${totalMoney.toFixed(2)} dollars left.`);
    } else {
        totalMoney = Math.abs(totalMoney)
        console.log(`He will need ${totalMoney.toFixed(2)} dollars to survive.`);
    }

} demo([`100000.15`, `1808`])