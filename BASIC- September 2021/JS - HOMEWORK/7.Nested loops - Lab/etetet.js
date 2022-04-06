function demo(input) {
    let index = 0;
    let command = input[index];

    while (command !== `End`) {
        let country = input[index];
        index++;
        let budget = Number(input[index]);
        index++;
        let sum = 0;
        while (budget > sum) {
            let money = Number(input[index]);
            sum += money;
            index++;
            command = input[index];

        }
        console.log(`Going to ${country}!`);

    }


} demo(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])


