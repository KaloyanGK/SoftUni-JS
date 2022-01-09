function examPreparation(input) {
    let index = 0;
    let height = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let calcBothOfThem = height * width * 4;
    let paint = Number(input[index]) / 100;
    index++;

    let calcPaint = calcBothOfThem - (calcBothOfThem * paint);

    let command = input[index]
    index++;

    while (command !== "Tired!") {
        let currentNum = Number(command);
        calcPaint -= currentNum;
        command = input[index]
        index++;
        if (calcPaint < 0) {
            calcPaint = Math.abs(calcPaint);
            console.log(`All walls are painted and you have ${Math.abs(calcPaint)} l paint left!`);
            break;

        }
    }
    if (command === "Tired!") {
        console.log(`${calcPaint} quadratic m left.`);
    }
} examPreparation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])