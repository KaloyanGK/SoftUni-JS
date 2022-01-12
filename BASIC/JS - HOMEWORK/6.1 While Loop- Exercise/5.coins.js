function coins(input) {
    let money = Number(input[0]);
    money = Math.floor(money * 100);
    let counter = 0;

    while (money > 0) {
        if (money > 200) {
            counter++;
            money -= 200;
        } else if (money >= 100) {
            counter++;
            money -= 100;
        } else if (money >= 50) {
            counter++;
            money -= 50
        } else if (money >= 20) {
            counter++;
            money -= 20;
        } else if (money >= 10) {
            counter++;
            money -= 10
        } else if (money >= 5) {
            counter++;
            money -= 5
        } else if (money >= 2) {
            counter++;
            money -= 2
        } else {
            counter++;
            money -= 1
        }

    }
    console.log(counter)


} coins(["0.56"])