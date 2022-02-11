function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalCosts = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalCosts += helmetPrice;
        } if (i % 3 === 0) {
            totalCosts += swordPrice;
        } if (i % 6 === 0) {
            totalCosts += shieldPrice;
        } if (i % 12 === 0) {
            totalCosts += armorPrice;
        }

    }
    console.log(`Gladiator expenses: ${totalCosts.toFixed(2)} aureus`);
} gladiatorExpenses(7, 2, 3, 4, 5)

