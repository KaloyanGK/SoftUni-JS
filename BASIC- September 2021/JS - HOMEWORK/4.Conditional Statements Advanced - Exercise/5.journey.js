function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let Camp = 0;
    let Hotel = 0;

    if (budget <= 100) {
        switch (season) {
            case "summer": Camp = budget - (budget * 0.7);
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${(Camp).toFixed(2)}`); break;
            case "winter": Hotel = budget - (budget * 0.3);
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${(Hotel).toFixed(2)}`); break
        }
    } else if (budget <= 1000) {
        switch (season) {
            case "summer": Camp = budget - (budget * 0.6);
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${(Camp).toFixed(2)}`); break
            case "winter": Hotel = budget - (budget * 0.2);
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${(Hotel).toFixed(2)}`); break
        }
    } else {
        switch (season) {
            case "summer": Hotel = budget - (budget * 0.1)
            case "winter": Hotel = budget - (budget * 0.1);
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${(Hotel).toFixed(2)}`); break

        }
    }
} journey(["50", "summer"])
