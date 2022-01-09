function demo(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let count = Number(input[2]);
    let transportCosts = 0;
    let totalTicketPrice = 0;
    if (count >= 1 && count <= 4) {
        transportCosts = budget * 0.75;
    } else if (count > 4 && count <= 9) {
        transportCosts = budget * 0.60;
    } else if (count > 9 && count <= 24) {
        transportCosts = budget * 0.50;
    } else if (count > 24 && count <= 49) {
        transportCosts = budget * 0.40;
    } else if (count > 49) {
        transportCosts = budget * 0.25;
    }
    if (type === `Normal`) {
        totalTicketPrice = count * 249.99;
    } else if (type === `VIP`) {
        totalTicketPrice = count * 499.99;
    }
    let totalCosts = transportCosts + totalTicketPrice;
    let diff = Math.abs(budget - totalCosts)
    if (budget > totalCosts) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (budget < totalCosts) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
} demo([`30000`, `VIP`, `49`])