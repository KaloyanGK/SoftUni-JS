function blackFlag(arr) {

    let days = Number(arr.shift())
    let dailyPlunder = Number(arr.shift())
    let expectedPlunder = Number(arr.shift())
    let currentPlunder = 0;
    for (let i = 1; i <= days; i++) {
        let day = i;
        if (day % 3 == 0) {
            currentPlunder += dailyPlunder + (dailyPlunder / 2);
        } else {
            currentPlunder += dailyPlunder;
        }
        if (day % 5 == 0) {
            currentPlunder = currentPlunder - (currentPlunder * 0.3)
        }
    }
    if (currentPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${currentPlunder.toFixed(2)} plunder gained.`)
    } else {
        let diff = expectedPlunder - currentPlunder;
        let diffInPercentage = (diff / expectedPlunder) * 100;
        let leftPlunderPercentage = 100 - diffInPercentage;
        console.log(`Collected only ${leftPlunderPercentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["10",
    "20",
    "380"])
)