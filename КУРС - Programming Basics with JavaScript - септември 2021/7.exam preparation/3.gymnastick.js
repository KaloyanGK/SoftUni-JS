function gymnastick(input) {
    let country = input[0];
    let tool = input[1];
    let totalScore = 0;

    if (country === `Russia`) {
        switch (tool) {
            case `ribbon`: totalScore = 9.100 + 9.400; break;
            case `hoop`: totalScore = 9.300 + 9.800; break;
            case `rope`: totalScore = 9.600 + 9.000; break;
        }
    } else if (country === `Bulgaria`) {
        switch (tool) {
            case `ribbon`: totalScore = 9.600 + 9.400; break;
            case `hoop`: totalScore = 9.550 + 9.750; break;
            case `rope`: totalScore = 9.500 + 9.400; break;
        }
    } else if (country === `Italy`) {
        switch (tool) {
            case `ribbon`: totalScore = 9.200 + 9.500; break;
            case `hoop`: totalScore = 9.450 + 9.350; break;
            case `rope`: totalScore = 9.700 + 9.150; break;
        }
    }
    let diff = 20 - totalScore;
    let diffPercent = (diff / 20) * 100;
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${tool}.`);
    console.log(`${diffPercent.toFixed(2)}%`);


} gymnastick([`Russia`, `rope`])