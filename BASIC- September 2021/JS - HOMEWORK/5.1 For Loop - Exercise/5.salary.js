function salary(input) {

    let n = Number(input[0]);
    let money = Number(input[1]);

    for (let i = 2; i <= n; i++) {
        let x = input[i + 1]

        if (x === `Facebook`) {
            money -= 150
        } else if (x === `Instagram`) {
            money -= 100
        } else if (x === `Reddit`) {
            money -= 50
        } else {
            money = money
        }

    }
    if (money <= 0) {
        console.log(`You have lost your salary.`)


    } else {
        console.log(`${money}`)
    }


} salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])




